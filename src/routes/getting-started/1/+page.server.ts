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
		const age = data.get('age');
		const height = data.get('height');
		const weight = data.get('weight');

		database.prepare('UPDATE users SET age = (@age), height = (@height), weight = (@weight) WHERE id = (@id)').run({
			age,
			height,
			weight,
			id: ID
		})

		throw redirect(303, '/getting-started/2')
	},
} satisfies Actions;
