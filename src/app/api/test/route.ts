import {getRequestContext} from '@cloudflare/next-on-pages';

export const runtime = 'edge';

export async function GET() {
	const storage = getRequestContext().env.STORAGE;

	const keys = (await storage.list()).objects.map(obj => obj.key);

	console.log(keys);

	const obj = await storage.get('test3');

	if (obj === null) {
		const response = await storage.put(
			'test3',
			JSON.stringify({body: 'Hello, World!'}),
		);
		console.log(JSON.stringify(response, null, 2));
		if (response?.uploaded) {
			return new Response('File uploaded');
		}
		return new Response('Failed to upload');
	}

	if (keys[1]) {
		await storage.delete(keys[1]);
		console.log('deleting: ', keys[1]);
	}

	return new Response(obj?.body);
}
