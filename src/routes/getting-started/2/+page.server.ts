import { fail, redirect } from '@sveltejs/kit'
import type { Actions, PageServerLoad } from './$types'
import { database } from "../../../lib/server/database/driver";

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

		// Get the selected diseases and insert into DB
		const allSelectedDiseases = data.getAll('diseases');

		database.prepare('UPDATE users SET diseases = (@selectedStuff) WHERE id = (@id)').run({
			selectedStuff: allSelectedDiseases[0].toString(),
			id: ID
		})

		throw redirect(302, '/dashboard')
	},
} satisfies Actions;
