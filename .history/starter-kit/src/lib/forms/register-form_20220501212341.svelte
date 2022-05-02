<script type="ts">
	import { goto } from '$app/navigation';
	import { auth } from '../../utils/nhost';
	import Input from '$lib/elements/input.svelte';
	import { parseError } from '$lib/utility/utilityFunctions';
	import type { ErrorResponse } from '$lib/utility/types';

	let errorShow;
	let errorShowEmailInUse;
	let name;
	let email;
	let password;

	function prefill() {
		email = 'coble.jesse@gmail.com';
		name = 'Jesse';
		password = '111111Jc!';
	}

	async function submit() {
		try {
			const { error } = await auth.signUp({
				email,
				password,
				options: {
					displayName: name
				}
			});

			if (error) {
				let err: ErrorResponse = parseError(error);
				if (err.shoudDisplayAsFormError && err.status === 409) {
					errorShowEmailInUse = err.message;
				} else if (err.shoudDisplayAsFormError && err.status !== 409) {
					errorShow = err.message;
				} else if (err?.field) {
					errorShow = err.field;
				} else if (err) {
					console.log(err);
					alert(err.message);
				}
				return;
			}

			goto('/profile');
		} catch (e) {
			let err: ErrorResponse = parseError(e);
			if (err.shoudDisplayAsFormError && err.status === 409) {
				errorShowEmailInUse = err.message;
			} else if (err.shoudDisplayAsFormError && err.status !== 409) {
				errorShow = err.message;
			} else if (err?.field) {
				errorShow = err.field;
			} else if (err) {
				console.log(err);
				alert(err.message);
			}
			return;
		}
	}
</script>

{#if errorShow}
	<p class="text-red-400 py-2">{errorShow}</p>
{/if}
<form class="space-y-2" on:submit|preventDefault={submit}>
	<Input required label="Name" type="text" bind:value={name} name="name" />
	<Input required label="Email" type="email" bind:value={email} name="email" />
	{#if errorShowEmailInUse}
		<p class="text-red-400 py-2">{errorShowEmailInUse}</p>
	{/if}
	<Input required label="Password" type="password" bind:value={password} name="password" />
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
