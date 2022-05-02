import { NhostClient } from '@nhost/nhost-js';

const nhost = new NhostClient({
	backendUrl: 'https://onsqigzibsqyyjjlbvol.nhost.run' // replace this with the backend URL of your app
});

console.log(nhost.graphql.getUrl());

const auth = nhost.auth;
const storage = nhost.storage;

export { auth, storage };
