import { fail, redirect } from '@sveltejs/kit'
import type { Actions, PageServerLoad } from './$types'
import { database } from "../../lib/server/database/driver";

let ID;
export const load: PageServerLoad = async ({locals}) => {
	// redirect user if not logged in
	if (!locals.user) {
		throw redirect(302, '/login')
	} else {
		ID = locals.user.id
	}

	// We get the completed tasks
	const completedTasks = database.prepare('SELECT * FROM tasks WHERE taskCompleted = 1').all()

	// Trim the array so it doesnt overload itself
	if (completedTasks.length > 15) {
		completedTasks.length = 15
	}

	// Create a new array since the original one has the image buffer in place and it wont work
	const reformattedTasks = completedTasks.map(task => {
		const user = database.prepare('SELECT * FROM users WHERE id = (@id)').get({id: ID})
		return {
			taskId: task.taskid,
			taskLikes: task.likes ?? 0,
			taskName: task.taskName,
			username: user.displayName,
		}
	})

	return {feed: reformattedTasks.reverse()};
}

export const actions: Actions = {
	upvote: async ({request, locals}) => {
		const data = await request.formData();

		// Get the task ID
		const taskId = data.get('taskId')?.toString();

		// Get the current likes
		const currentTaskData = database.prepare('SELECT * FROM tasks WHERE taskId = (@taskid)').get({
			taskid: taskId
		})

		// Do math to add likes and update DB
		const currentLikes = currentTaskData.likes === undefined ? 0 : currentTaskData.likes;
		const newLikes = currentLikes + 1;
		console.log(currentLikes)
		database.prepare('UPDATE tasks SET likes = (@newlikes) WHERE taskid = (@taskid)').run({
			newlikes: newLikes,
			taskid: taskId
		})

		throw redirect(302, '/feed')
	},
};
