<script>
	import supabase from '$lib/db'
	import { user, email, password, confirmPassword } from '$lib/stores'
	import { goto } from '$app/navigation'

	let error = false

	const signUp = async () => {
		if ($password === $confirmPassword) {
			let { user: userDetails, error } = await supabase.auth.signUp({
				email: $email,
				password: $password
			})
			$user = userDetails
			$email = ''
			$password = ''

			goto('/home')
		} else {
			error = true
		}
	}
</script>

<div class="sign">
	<a href="/">
		<img class="back" src="/static/back.svg" alt="back" />
	</a>
	<span class="Create-Account"> Create Account </span>
	<span class="Please-fill-the-input-below-here"> Please fill the input below here. </span>

	<form action="">
		<div class="Rectangle email">
			<div class="icon">
				<img src="/static/email.svg" alt="email" />
			</div>
			<div class="content">
				<input bind:value="{$email}" required placeholder="Email" type="email" />
			</div>
		</div>
		<div class="Rectangle password">
			<div class="icon">
				<img src="/static/lock.svg" alt="lock" />
			</div>
			<div class="content">
				<input bind:value="{$password}" required placeholder="Password" type="password" />
			</div>
		</div>
		<div class="Rectangle confirm">
			<div class="icon">
				<img src="/static/lock.svg" alt="lock confirm" />
			</div>
			<div class="content">
				<input
					bind:value="{$confirmPassword}"
					required
					placeholder="Confirm Password"
					type="password"
				/>
			</div>
		</div>
	</form>

	<div on:click="{signUp}" class="Rectangle-1">
		<span class="Sign-Up">Sign Up</span>
	</div>

	<div class="already">
		<span class="Already-have-an-account">Already have an account?</span>
		<a href="/login"><span class="Login">Login</span></a>
	</div>

	<div class="Or-connect-with">
		<img src="/static/connect.svg" alt="connet login" />
	</div>

	{#if error}
		<div class="error">Please check the password.</div>
	{/if}
</div>

<style>
	.sign {
		width: 100%;
		height: 100vh;
		position: relative;
		background-color: #383838;
	}
	.back {
		position: absolute;
		top: 3%;
		left: 3%;
		width: 30px;
		height: 30px;
	}

	.Create-Account {
		position: absolute;
		top: 20%;
		left: 50%;
		transform: translate(-50%, -50%);
		font-family: 'Raleway', sans-serif;
		font-size: 2.2rem;
		font-weight: 800;
		color: #fff;
		width: 100%;
		text-align: center;
	}
	.Please-fill-the-input-below-here {
		position: absolute;
		top: 25%;
		left: 50%;
		transform: translate(-50%, -50%);
		font-family: 'Open Sans', sans-serif;
		font-size: 0.9rem;
		color: #fff;
		width: 100%;
		text-align: center;
	}
	.Rectangle {
		position: absolute;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 20rem;
		height: 3rem;
		border-radius: 0.5rem;
		background-color: #494949;
		display: flex;
	}

	.Rectangle.email {
		top: 35%;
	}
	.Rectangle.password {
		top: 45%;
	}
	.Rectangle.confirm {
		top: 55%;
	}
	.icon {
		width: 50px;
		height: 50px;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.content {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	input {
		font-family: 'Roboto', sans-serif;
		font-size: 16px;
		color: #fff;
		background-color: transparent;
		width: 16rem;
		padding: 5px 8px;
	}
	input::placeholder {
		font-family: 'Open Sans', sans-serif;
		font-size: 14px;
		font-weight: 600;
		color: #666;
	}
	.error {
		color: red;
		position: absolute;
		top: 60%;
		left: 50%;
		transform: translate(-50%, -50%);
		font-family: 'Roboto', sans-serif;
	}

	.Rectangle-1 {
		position: absolute;
		top: 65%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 199.7px;
		height: 51px;
		border-radius: 25.5px;
		background-color: #ff748c;
		cursor: pointer;
	}
	.Sign-Up {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		font-family: 'Open Sans', sans-serif;
		font-size: 18px;
		font-weight: 600;
		text-align: left;
		color: #fff;
	}
	.already {
		position: absolute;
		top: 75%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 100%;
		text-align: center;
	}
	.Already-have-an-account {
		transform: translate(-50%, -50%);
		font-family: 'Open Sans', sans-serif;
		font-size: 14px;
		text-align: center;
		color: #fff;
	}
	.Login {
		transform: translate(-50%, -50%);
		font-family: 'Open Sans', sans-serif;
		font-size: 14px;
		font-weight: 800;
		text-align: center;
		color: #c46969;
	}

	.Or-connect-with {
		position: absolute;
		top: 90%;
		left: 50%;
		transform: translate(-50%, -50%);
		font-family: 'Open Sans', sans-serif;
		font-size: 13px;
		text-align: left;
		color: #828282;
	}
	.Or-connect-with::after {
		display: block;
		content: '';
		width: 250px;
		height: 1px;
		background-color: gray;
		position: absolute;
		top: 76%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: 1;
	}
</style>
