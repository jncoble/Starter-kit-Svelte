import { createClient, NhostClient } from '@nhost/nhost-js';

const nhostClient: NhostClient = createClient({
	baseURL: 'https://backend-url.nhost.app'
});

const auth = nhostClient.auth;
const storage = nhostClient.storage;

export { auth, storage };
