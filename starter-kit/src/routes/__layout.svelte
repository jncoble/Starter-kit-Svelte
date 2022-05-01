<script>
	import '../app.css';
	import '../app.postcss';
	import Nav from '$lib/nav.svelte';
</script>

<main class="container mx-auto">
	<nav />
	<div class="pt-4">
		<slot />
	</div>
</main>
