import { error, redirect } from '@sveltejs/kit'
import { database } from "../../../lib/server/database/driver";
import { DateTime } from "luxon";

export const load = async ({locals}) => {
	// redirect user if not logged in
	if (!locals.user) {
		throw redirect(302, '/login')
	}

	// We get all the user detail
	const user = database.prepare('SELECT * FROM users WHERE id = ?').get(locals.user.id)

	const jsTime = DateTime.fromSQL(user.lastCycle).toJSDate()

	// If age is empty, then go to OOBE mode
	if (!user.age) {
		throw redirect(302, '/getting-started/1')
	} else {
		// else we return all the data to hydrate the page itself
		return {
			initDate: jsTime,
			diseases: user.diseases,
			expectedDate: user.expectedDate
		}
	}
}
