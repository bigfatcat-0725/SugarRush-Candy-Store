<script>
	import Nav from '$lib/components/Nav.svelte'
	import { user } from '$lib/stores'

	let notLogin = false

	$: if (!$user) notLogin = true
</script>

<!-- <h4>Welcome {$user?.email ? $user.email : ''}!</h4>
	<button on:click="{logout}">로그아웃</button> -->

<div class="home">
	<Nav notLogin="{notLogin}" />
</div>

<style>
	.home {
		width: 100%;
		height: 100vh;
		position: relative;
		background-color: #fefefe;
	}
</style>
