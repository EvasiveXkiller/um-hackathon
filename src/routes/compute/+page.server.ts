import { error, redirect } from '@sveltejs/kit';
import { database } from "../../lib/server/database/driver";

// This is used to protect the route, ensuring authentication
let ID;
/** @type {import('../../../.svelte-kit/types/src/routes').PageLoad} */
export const load = async ({locals}) => {
	// redirect user if not logged in
	if (!locals.user) {
		throw redirect(302, '/login')
	} else {
		ID = locals.user.id
	}
}
