import { createClient } from "@nhost/nhost-js";

const nhostClient = createClient({
	baseURL: "https://onsqigzibsqyyjjlbvol.nhost.run",
});

const auth = nhostClient.auth;
const storage = nhostClient.storage;

export { auth, storage };
