import { error, redirect } from '@sveltejs/kit'
import type { Actions, PageServerLoad } from './$types'
import { database } from "../../lib/server/database/driver";

export const load: PageServerLoad = async ({locals}) => {
	// redirect user if not logged in
	if (!locals.user) {
		throw redirect(302, '/login')
	}

	const user = database.prepare('SELECT * FROM users WHERE id = ?').get(locals.user.id)

	const userTask = database.prepare('SELECT * FROM tasks WHERE userid = ?').all(locals.user.id)

	const isTasksReady = userTask.map(task => !Number(task.currentlyActive) == 0)

	if (!user.age) {
		throw redirect(302, '/getting-started/1')
	} else {
		return {
			userData: [
				{key: "id", value: user.id},
				{key: "email", value: user.email},
				{key: "coins", value: user.coins},
				{key: "age", value: user.age},
				{key: "weight", value: user.weight},
				{key: "disease", value: user.diseases},
				{key: "height", value: user.height},
				{key: "displayName", value: user.displayName},
			],
			userTasks: userTask.map(task => {
				return {
					userid: task.userid,
					taskId: task.taskId,
					taskName: task.taskName,
					taskCompleted: task.taskCompleted,
					currentlyActive: task.currentlyActive
				}
			}),
			isTaskEmpty: !isTasksReady.includes(true)
		}
	}
}

export const actions: Actions = {
	completeTask: async ({request, locals}) => {
		const data = await request.formData();

		const taskName = data.get('taskName')?.toString();
		const userID = data.get('userID')?.toString();

		console.log("reached")
		const albumImage = data.get('taskImage')?.valueOf() as File;

		console.log(
			albumImage?.name, // filename
			albumImage?.type, // mime type
			albumImage?.size, // file size in bytes
			albumImage?.lastModified // last modified date
			// albumImage?.arrayBuffer() // ArrayBuffer with the file contents
		);

		console.log(taskName, userID)

		const arrayBuffer = await albumImage.arrayBuffer();
		const buffer = Buffer.from(arrayBuffer);

		database.prepare('UPDATE tasks SET taskCompleted = 1, imageData = (@buffer), imageFileName = (@imageName), imageLastModified = (@imageLastModified), imageMimeType = (@imageMimeType), imageSize = (@imageSize) WHERE taskName = (@taskName) AND userid = (@id)').run({
			taskName: taskName,
			imageName: albumImage.name,
			imageLastModified: albumImage.lastModified,
			imageMimeType: albumImage.type,
			imageSize: albumImage.size,
			id: userID,
			buffer: buffer
		})

		throw redirect(302, '/dashboard')
	},
};
