import { fail, redirect } from '@sveltejs/kit'
import type { Actions, PageServerLoad } from './$types'
import { database } from "../../../lib/server/database/driver";
import { v4 as uuidv4 } from 'uuid';
import { DateTime } from "luxon";

let ID = 0;

export const load: PageServerLoad = async ({locals}) => {
	// redirect user if not logged in
	if (!locals.user) {
		throw redirect(302, '/')
	} else {
		ID = locals.user.id
	}

}

export const actions = {
	default: async ({cookies, request}) => {
		const data = await request.formData();

		// Get the form data
		const age = data.get('age');
		const height = data.get('height');
		const weight = data.get('weight');
		const babyName = data.get('babyName')
		const lastCycleDate = data.get('lastCycleDate');

		const time = DateTime.fromFormat(lastCycleDate as string, 'D').plus({days: 273}).toSQLDate()

		// Since we are in OOBE mode, we create all the new tasks and enable them to be completed
		database.prepare('UPDATE users SET age = (@age), height = (@height), weight = (@weight), babyName = (@baby), expectedDate = (@expected) WHERE id = (@id)').run({
			age,
			height,
			weight,
			baby: babyName,
			expected: time,
			id: ID
		})

		// Insert task in the new table for later processing
		const validTasks = [
			'Walk in da park',
			'Swimming',
			'Drink Water',
			'Eat healthy food',
			'Yoga',
			'Jogging',
			'Cook Breakfast'
		]

		// Insert task into the table
		for (const itask of validTasks) {
			database.prepare('INSERT INTO tasks (userid, taskid, taskName, taskCompleted, currentlyActive) VALUES (@userid, @taskid, @taskName, @taskCompleted, @currentlyActive)').run({
				userid: ID,
				taskid: uuidv4().toString(),
				taskName: itask,
				taskCompleted: 0,
				currentlyActive: 1,
			});
		}


		throw redirect(303, '/getting-started/2')
	},
} satisfies Actions;
