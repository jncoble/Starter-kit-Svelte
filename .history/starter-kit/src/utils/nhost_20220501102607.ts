import { createClient } from '@nhost/nhost-js';

const nhostClient =
	createClient[
		{
			baseUrl: 'https://backend-url.nhost.app'
		}
	];

const auth = nhostClient.auth;
const storage = nhostClient.storage;

export { auth, storage };
