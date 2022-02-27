<script context="module">
	/** @type {import('@sveltejs/kit').Load} */
	export const load = async ({ url }) => ({ props: { url } })
</script>

<script>
	import '../app.css'
	import PageTransition from '$lib/components/PageTransition.svelte'
	export let url
</script>

<div>
	<PageTransition url="{url}">
		<slot />
	</PageTransition>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;800&family=Raleway:wght@600&family=Roboto&display=swap');

	div {
		height: 95vh;
		width: 100%;
	}
</style>
