<script>
	import { goto } from '$app/navigation'

	import supabase from '$lib/db'
	import { user } from '$lib/stores'

	const logOut = async () => {
		let { error } = await supabase.auth.signOut()
		goto('/')
	}

	console.log($user)
</script>

<h4>Welcome {$user?.email ? $user.email : ''}!</h4>
<button on:click="{logOut}">로그아웃</button>
