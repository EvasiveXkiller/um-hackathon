import type { Actions } from './$types';
import { database } from "../../lib/server/database/driver";
import { error, redirect } from "@sveltejs/kit";
import bcrypt from 'bcrypt'
import * as crypto from "crypto";

export const actions = {
	default: async ({cookies, request}) => {
		const data = await request.formData();
		const email = data.get('email');
		const password = data.get('password');

		console.log(email)

		const user = database.prepare('SELECT * FROM users WHERE email = (?)').all(email);

		if (user.length !== 1) {
			throw error(400, 'user not found');
		}

		const userDetails = database.prepare('SELECT * FROM users WHERE email = (?)').get(email);
		const userPassword = await bcrypt.compare(password, userDetails.password);


		if (userPassword) {
			const newAuthToken = crypto.randomUUID()
			database.prepare('UPDATE users SET userAuthToken = (@authtoken) WHERE email = (@email)').run({
				email,
				authtoken: newAuthToken
			})
			cookies.set('session', newAuthToken, {
				// send cookie for every page
				path: '/',
				// server side only cookie so you can't use `document.cookie`
				httpOnly: true,
				// only requests from same site can send cookies
				// https://developer.mozilla.org/en-US/docs/Glossary/CSRF
				sameSite: 'strict',
				// only sent over HTTPS in production
				secure: process.env.NODE_ENV === 'production',
				// set cookie to expire after a month
				maxAge: 60 * 60 * 24 * 30,
			})

			throw redirect(303, '/dashboard');
		}

		throw error(400, 'password incorrect');
	},
} satisfies Actions;
