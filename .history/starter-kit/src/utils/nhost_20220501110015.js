import { createClient } from '@nhost/nhost-js';

const nhost = createClient({
	baseURL: 'https://onsqigzibsqyyjjlbvol.nhost.run'
});

const auth = nhost.auth;
const storage = nhost.storage;

export { auth, storage };
