<script type="ts">
	let name: string;
	let email: string;
	let password: string;
</script>

<form on:submit|preventDefault={handleSubmit}>
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
