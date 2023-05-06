import { error, redirect } from '@sveltejs/kit'
import type { Actions, PageServerLoad } from './$types'
import { database } from "../../lib/server/database/driver";

export const load: PageServerLoad = async ({locals}) => {
	// redirect user if not logged in
	if (!locals.user) {
		throw redirect(302, '/login')
	}

	// We get all the user detail
	const user = database.prepare('SELECT * FROM users WHERE id = ?').get(locals.user.id)

	// We get all the user tasks
	const userTask = database.prepare('SELECT * FROM tasks WHERE userid = ?').all(locals.user.id)

	// We check if the tasks are active of not
	const isTasksReady = userTask.map(task => !Number(task.currentlyActive) == 0)

	// If age is empty, then go to OOBE mode
	if (!user.age) {
		throw redirect(302, '/getting-started/1')
	} else {
		// else we return all the data to hydrate the page itself
		return {
			userData: [
				{key: "User ID", value: user.id},
				{key: "User Name", value: user.displayName},
				{key: "Email", value: user.email},
				{key: "Baby Name", value: user.babyName},
				{key: "Expected Date", value: user.expectedDate},
				{key: "Coins", value: user.coins},
				{key: "Age", value: user.age},
				{key: "Weight (KG)", value: user.weight},
				{key: "Height (CM)", value: user.height},
				{key: "Diseases", value: user.diseases},
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
	// This named action happens when the task is completed
	completeTask: async ({request, locals}) => {
		const data = await request.formData();

		// get all the form data
		const taskName = data.get('taskName')?.toString();
		const userID = data.get('userID')?.toString();

		// get the image as a File
		const albumImage = data.get('taskImage')?.valueOf() as File;

		// Convert it into buffer
		const arrayBuffer = await albumImage.arrayBuffer();
		const buffer = Buffer.from(arrayBuffer);

		// Write to the database with all the new information, and set the status to completed
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
