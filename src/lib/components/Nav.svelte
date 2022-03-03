<script>
	import { goto } from '$app/navigation'
	import supabase from '$lib/db'
	import { user } from '$lib/stores'

	// export let notLogin

	const logout = async () => {
		let { error } = await supabase.auth.signOut()
		$user = null
		goto('/')
	}

	let menu = false
	const menuOpen = () => {
		menu = !menu
	}
</script>

<nav>
	<ul>
		<div class="left">
			<li><a href="/">memu</a></li>
			<li><a href="/">store</a></li>
		</div>
	</ul>

	<ul>
		<div class="right">
			<li><a href="/">cart</a></li>
			<li><a href="/">profile</a></li>
		</div>
	</ul>
</nav>

<style>
	nav {
		width: 100%;
		height: 7vh;
		border-bottom: 1px solid black;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.left {
		display: flex;
	}
	.right {
		display: flex;
	}
	li {
		padding: 2rem;
	}
</style>
