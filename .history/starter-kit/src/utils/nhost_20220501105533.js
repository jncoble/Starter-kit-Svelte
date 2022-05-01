import { createClient } from 'nhost-js-sdk';

const nhostClient = createClient({
	baseURL: 'https://onsqigzibsqyyjjlbvol.nhost.run'
});

const auth = nhostClient.auth;
const storage = nhostClient.storage;

export { auth, storage };
