import { fail, redirect } from '@sveltejs/kit'
import type { Actions, PageServerLoad } from './$types'
import { database } from "../../../lib/server/database/driver";

let ID;
export const load: PageServerLoad = async ({locals}) => {
	// redirect user if not logged in
	if (!locals.user) {
		throw redirect(302, '/login')
	} else {
		ID = locals.user.id
	}
}

// TODO Andrew, kindly make the shop not stealing money from people
export const actions = {
	default: async ({cookies, request}) => {
		const data = await request.formData();
		const cost = data.get('cost');

		const user = database.prepare('SELECT * FROM users where id = ?').get(ID);

		const deductedCoins = user.coins - cost

		if (deductedCoins < 0) {
			return {success: false, message: 'Insufficient funds'}
		}

		database.transaction(() => {
			database
				.prepare(
					"UPDATE users SET coins = ? WHERE id= ?"
				)
				.run(deductedCoins, ID);
		})
		database.prepare('UPDATE users SET coins = (@coins) WHERE id = (@id)').run({
			coins: deductedCoins,
			id: ID

		})

		return {success: true, coins: deductedCoins}
	},
} satisfies Actions;
