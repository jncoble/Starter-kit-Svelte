import { createClient } from '@nhost/nhost-js';

const nhostClient = createClient({
	// baseURL: import.meta.env.VITE_NHOST_BASE_URL
	baseURL: 'https://onsqigzibsqyyjjlbvol.nhost.run'
});

const auth = nhostClient.auth;
const storage = nhostClient.storage;

export { auth, storage };
