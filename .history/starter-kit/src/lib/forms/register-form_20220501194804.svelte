<script type="ts">
	import { goto } from '$app/navigation';
	import { auth } from '../../utils/nhost';
	import type { ApiError } from '@nhost/hasura-auth-js/dist/utils/types';
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
			.signUp({
				email,
				password,
				options: {
					displayName: name
				}
			})
			.then(() => {
				goto('/profile');
			})
			.catch((e) => {
				error = parseError(e);
				// error = e.response.data;
			});
	}

	function parseError(e: any): any {
		if (e) {
			let err: ApiError = e;
		}
	}
</script>

{#if error}
	<p class="text-red-400 py-2">{error.message}</p>
{/if}
<form class="space-y-2" on:submit|preventDefault={submit}>
	<Input label="Name" type="text" bind:value={name} name="name" />
	<Input label="Email" type="email" bind:value={email} name="email" />
	<Input label="Password" type="password" bind:value={password} name="password" />
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
