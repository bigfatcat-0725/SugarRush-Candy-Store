<script>
	import { user } from '$lib/stores'

	console.log($user)
</script>

<h4>Welcome {$user?.email ? $user.email : ''}!</h4>
