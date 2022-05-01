<script>
	import { goto } from '$app/navigation';
	import { auth } from '../../utils/nhost';
	import Input from '$lib/elements/input.svelte';

	let error;
	let name;
	let email;
	let password;

	function prefill() {
		email = 'coble.jesse@gmail.com';
		name = 'Jesse';
		password = '111111Jc!';
	}

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
			.then(() => {
				goto('/profile');
			})
			.catch((e) => {
				error = e.response.data;
			});
	}
</script>

{#if error}
	<p class="text-red-400 py-2">{error.message}</p>
{/if}
<form class="space-y-2" on:submit|preventDefault={submit}>
	<Input label="Name" type="text" bind:value={name} name="name/>
	<Input label="Email" type="email" bind:value={email} name="email" />
	<Input label="Password" type="password" bind:value={password} name="password/>
	<div class="pt-2">
		<button class="py-2 px-4 text-white bg-gray-700 rounded-md shadow-sm" type="submit"
			>Register
		</button>
		<button
			class="py-2 px-4 text-white bg-gray-700 rounded-md shadow-sm"
			type="button"
			on:click={prefill}
			>Prefill(testing)
		</button>
	</div>
</form>
