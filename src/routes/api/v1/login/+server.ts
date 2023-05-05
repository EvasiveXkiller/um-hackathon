import { database } from "../../../../lib/server/database/driver";
import { json } from '@sveltejs/kit'

export async function POST(req) {
	const data = await req.request.formData()
	const email = data.get('Email Address');

	// subscribe the user to the newsletter
	console.log(email)

	// return success
	return new Response(JSON.stringify({success: true}), {
		headers: {
			'Content-Type': 'application/json'
		}
	})

	// it's common to return JSON, so SvelteKit has a helper
	return json({success: true})
}
