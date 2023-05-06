import { error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { database } from "../../../../../lib/server/database/driver";

export const GET = (async ({ params, setHeaders }) => {

	// TODO: greate getAlbumImage function

	const itask = database.prepare('SELECT * FROM tasks where taskid = (@taskid)').get({
		taskid: params.taskId
	})

	const img = {
		filename: itask.imageFilename,
		mimeType: itask.imageMimeType,
		lastModified: itask.imageLastModified,
		size: itask.imageSize,
		data: itask.imageData,
	}

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

	return new Response(img.data);
}) satisfies RequestHandler;
