<script type="ts">
	import { auth } from '../utils/nhost';
	let error: any;
	let name: string;
	let email: string;
	let password: string;

	function registerUser() {
		auth
			.register({
				email,
				password,
				options: {
					userData: {
						display_name: name
					}
				}
			})
			.then((data) => {
				console.log(data);
			});
	}
</script>

<form on:submit|preventDefault={registerUser}>
	<label>
		Name
		<input bind:value={name} type="text" />
	</label>

	<label>
		Email
		<input bind:value={email} type="email" />
	</label>

	<label>
		Password
		<input bind:value={password} type="password" />
	</label>

	<button type="submit">Register</button>
</form>
