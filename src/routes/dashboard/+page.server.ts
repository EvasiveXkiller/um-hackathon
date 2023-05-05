import { redirect } from '@sveltejs/kit'
import type { PageServerLoad } from './$types'
import { database } from "../../lib/server/database/driver";

export const load: PageServerLoad = async ({locals}) => {
	// redirect user if not logged in
	if (!locals.user) {
		throw redirect(302, '/login')
	}

	const user = database.prepare('SELECT * FROM users WHERE id = ?').get(locals.user.id)

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
			]
		}
	}
}
