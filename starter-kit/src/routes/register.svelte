<!-- <script context="module">
	export const prerender = true;
</script>

<script>
	import RegisterForm from '$lib/forms/register-form.svelte';
</script>

<RegisterForm /> -->
<script type="ts">
	import { auth } from '../utils/nhost';
	let error: any;
	let name: string;
	let email: string;
	let password: string;

	function submit() {
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

{#if error}
	<p class="text-red-400 py-2">{error.message}</p>
{/if}
<form on:submit|preventDefault={submit}>
	<label>
		Name
		<input bind:value={name} type="text" />
	</label>A

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
