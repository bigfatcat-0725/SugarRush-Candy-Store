<script>
	import { goto } from '$app/navigation'
	import supabase from '$lib/db'
	import { user } from '$lib/stores'

	export let notLogin

	const logout = async () => {
		let { error } = await supabase.auth.signOut()
		$user = null
		goto('/')
	}
</script>

<div class="navbar bg-white mb-40 border-b">
	<div class="flex-none">
		<button class="btn btn-square btn-ghost">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				color="black"
				viewBox="0 0 24 24"
				class="inline-block w-5 h-5 stroke-current"
				><path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M4 6h16M4 12h16M4 18h16"></path></svg
			>
		</button>
	</div>
	<div class="flex-1">
		<a href="/" class="btn btn-ghost normal-case text-xl text-black">SugarRush</a>
	</div>
	<div class="flex-none">
		<div class="dropdown dropdown-end">
			<label for="" tabindex="0" class="btn btn-ghost btn-circle">
				<div class="indicator">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-5 w-5"
						fill="none"
						color="black"
						viewBox="0 0 24 24"
						stroke="currentColor"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
						></path></svg
					>
					<span class="badge badge-sm indicator-item">2</span>
				</div>
			</label>
			<div tabindex="0" class="mt-3 card card-compact w-52 dropdown-content bg-base-100 shadow">
				<div class="card-body">
					<span class="font-bold text-lg">2 Items</span>
					<span class="text-info">Subtotal: $999</span>
					<div class="card-actions">
						<button class="btn btn-primary btn-block">View cart</button>
					</div>
				</div>
			</div>
		</div>
		<div class="dropdown dropdown-end">
			<label for="" tabindex="0" class="btn btn-ghost btn-circle avatar">
				<div class="w-10 rounded-full">
					{#if notLogin}
						<img src="/static/lock.svg" alt="" />
					{:else}
						<img src="/static/email.svg" alt="" />
					{/if}
				</div>
			</label>
			<ul
				tabindex="0"
				class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
			>
				{#if notLogin}
					<li on:click="{logout}"><a href="/">Login</a></li>
				{:else}
					<li>
						<a href="/" class="justify-between">
							Profile
							<span class="badge">New</span>
						</a>
					</li>
					<li><a href="/">Settings</a></li>
					<li on:click="{logout}"><a href="/">Logout</a></li>
				{/if}
				<li></li>
			</ul>
		</div>
	</div>
</div>
