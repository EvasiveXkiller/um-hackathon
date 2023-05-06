import { error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { database } from "../../../../../lib/server/database/driver";

export const GET = (async ({params, setHeaders}) => {

	// This api route is used to retrieve the image for the feed

	// We first tell the database to fetch the image
	const itask = database.prepare('SELECT * FROM tasks where taskid = (@taskid)').get({
		taskid: params.taskId
	})

	// We build an object containing all the info needed and put values into them
	const img = {
		filename: itask.imageFilename,
		mimeType: itask.imageMimeType,
		lastModified: itask.imageLastModified,
		size: itask.imageSize,
		data: itask.imageData,
	}

	// If its empty then throw 404
	if (!img || !img.data) {
		throw error(404, 'Image not found');
	}

	// set response headers for image
	setHeaders({
		'Content-Type': img.mimeType,
		'Content-Length': img.size.toString(),
		'Last-Modified': new Date(img.lastModified).toUTCString(),
		'Cache-Control': 'public, max-age=600'
	});

	// Returns the image to the request
	return new Response(img.data);
}) satisfies RequestHandler;
