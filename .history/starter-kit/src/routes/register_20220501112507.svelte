<script type="ts">
	let name: string;
	let email: string;
	let password: string;
</script>

<form>
	<label>
		Name
		<input value={name} type="text" />
	</label>

	<label>
		Email
		<input value={email} type="email" />
	</label>

	<label>
		Password
		<input {email} type="password" />
	</label>

	<button type="submit" on:submit|preventDefault={handleSubmit}>Register</button>
</form>
