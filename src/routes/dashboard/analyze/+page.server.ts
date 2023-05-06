import { fail, redirect } from '@sveltejs/kit'
import type { Actions, PageServerLoad } from './$types'
import { database } from "../../../lib/server/database/driver";
import fetch from "node-fetch";

let ID;
export const load: PageServerLoad = async ({locals}) => {
	// redirect user if not logged in
	if (!locals.user) {
		throw redirect(302, '/login')
	} else {
		ID = locals.user.id
	}
}

export const actions = {
	default: async ({cookies, request}) => {
		// get all the form data
		const data = await request.formData();
		const sys = data.get('systolic').toString();
		const dia = data.get('diastolic').toString();
		const sugar = data.get('sugar').toString();
		const temp = data.get('temp').toString();
		const hr = data.get('hr').toString();

		// Get user info incase we need it
		const user = database.prepare('SELECT * FROM users where id = ?').get(ID);

		// Insert info into database table
		database.prepare('INSERT INTO currentReadings (id, sys_bp,dias_bp, blood_sugar, temp, hr) VALUES (@id, @sys_bp, @dias_bp, @blood_sugar, @temp, @hr)').run({
			id: ID,
			sys_bp: sys,
			dias_bp: dia,
			blood_sugar: sugar,
			temp: temp,
			hr: hr
		})

		//Arrange data into nice format
		const toSend = {
			age: Number(user.age),
			sys: Number(sys),
			dias: Number(dia),
			sugar: Number(sugar),
			temp: Number(temp),
			hr: Number(hr)
		}

		const encodeGetParams = p =>
			Object.entries(p).map(kv => kv.map(encodeURIComponent).join("=")).join("&");

		throw redirect(301, `/compute?${encodeGetParams(toSend)}}`)
		// //Build the request
		// const response = await fetch("127.0.0.1:5555/api/v1/aaronloveszijian", {
		// 	method: "POST",
		// 	body: JSON.stringify(toSend),
		// 	headers: {'Content-Type': 'application/json'}
		// })
		//
		// const responseData = await response.json();
		//
		// // Do something about the response, should be in json also, probably can stringify it, insert into database, then pull it out and use it somewhere else
		// console.log(responseData);
		//
		// throw redirect(302, '/dashboard')
	},
} satisfies Actions;
