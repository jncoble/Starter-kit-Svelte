import { NhostClient } from '@nhost/nhost-js';

const nhost = new NhostClient({
	backendUrl: 'https://[app-subdomain].nhost.run' // replace this with the backend URL of your app
});

console.log(nhost.graphql.getUrl());

const auth = nhostClient.auth;
const storage = nhostClient.storage;

export { auth, storage };
