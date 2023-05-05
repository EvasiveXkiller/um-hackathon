import type { Handle } from '@sveltejs/kit'
import { database } from "./lib/server/database/driver";

export const handle: Handle = async ({ event, resolve }) => {
	// get cookies from browser
	const session = event.cookies.get('session')

	if (!session) {
		// if there is no session load page as normal
		return await resolve(event)
	}

	// find the user based on the session
	const user = database.prepare('SELECT * FROM users WHERE userAuthToken = (?)').get(session);


	// if `user` exists set `events.local`
	if (user) {
		event.locals.user = {
			name: user.displayName,
		}
	}

	// load page as normal
	return await resolve(event)
}
