<script>
	import supabase from '$lib/db'
	import { goto } from '$app/navigation'
	import { user } from '$lib/stores'
	import { slide } from 'svelte/transition'

	let email,
		password = ''

	const logIn = async () => {
		let { user: userDetails, error } = await supabase.auth.signIn({
			email: email,
			password: password
		})

		$user = userDetails

		if ($user === null) {
			goto('/login')
		} else {
			goto('/home')
		}
	}

	let forgot = false
	const forgotToggle = () => {
		forgot = !forgot
	}
</script>

<div class="{!forgot ? 'login' : 'login opacity'}">
	<a href="/">
		<img class="back" src="/static/back.svg" alt="back" />
	</a>

	<img class="logo" src="/static/login-macaron.svg" alt="logo macaron" />

	<div class="login-text">
		<span class="Login"> Login </span>
		<span class="Please-sign-in-to-continue"> Please sign in to continue </span>
	</div>

	<div class="Rectangle email">
		<div class="icon">
			<img src="/static/email.svg" alt="email" />
		</div>
		<div class="content">
			<input bind:value="{email}" required placeholder="Email" type="email" />
		</div>
	</div>

	<div class="Rectangle password">
		<div class="icon">
			<img src="/static/lock.svg" alt="lock" />
		</div>
		<div class="content">
			<input bind:value="{password}" required placeholder="Password" type="password" />
		</div>
	</div>

	<span on:click="{forgotToggle}" class="Forgot-Password"> Forgot Password? </span>

	<div on:click="{logIn}" class="Rectangle-2">
		<span class="login-btn"> Login </span>
	</div>

	<div class="sign">
		<span class="Dont-have-an-account"> Don’t have an account? </span>
		<a href="/sign"><span class="Sign-Up"> Sign Up </span></a>
	</div>

	<div class="Or-connect-with">
		<img src="/static/connect.svg" alt="connect login" />
	</div>
</div>

<!-- Forgot -->
{#if forgot}
	<div transition:slide="{{ duration: 500 }}" class="forgot">
		<img on:click="{forgotToggle}" src="/static/cancel.svg" alt="cancel" class="cancel" />

		<span class="forgot-true">Forgot Password?</span>
		<span
			class="Enter-your-email-for-the-verification-process-we-will-send-4-digit-code-to-your-registered-email"
		>
			Enter your email for the verification process, we will send 4 digit code to your registered
			email.
		</span>
		<div class="forgot-Rectangle-email">
			<div class="icon">
				<img src="/static/email.svg" alt="email" />
			</div>
			<div class="content">
				<input bind:value="{email}" required placeholder="Email" type="email" />
			</div>
		</div>
		<div class="forgot-Rectangle-2">
			<span class="Continue">Continue</span>
		</div>
	</div>
{/if}

<style>
	.login {
		width: 100%;
		height: 100vh;
		position: relative;
		background-color: #383838;
	}
	.login.opacity {
		opacity: 0.7;
	}
	.back {
		position: absolute;
		top: 3%;
		left: 3%;
		width: 30px;
		height: 30px;
	}
	.logo {
		position: absolute;
		top: 15%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
	.login-text {
		position: absolute;
		width: 100%;
		top: 28%;
		left: 50%;
		transform: translate(-50%, -50%);
		text-align: center;
		display: flex;
		flex-direction: column;
	}
	.Login {
		font-family: Raleway;
		font-size: 36px;
		font-weight: 800;
		text-align: center;
		color: #fff;
	}
	.Please-sign-in-to-continue {
		font-family: OpenSans;
		font-size: 13px;
		text-align: center;
		color: #fff;
	}

	.Rectangle {
		position: absolute;
		top: 40%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 343px;
		height: 50px;
		border-radius: 6px;
		background-color: #494949;
		display: flex;
	}
	.Rectangle.password {
		top: 50%;
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
		text-align: left;
		color: #fff;
		background-color: transparent;
		width: 286px;
		padding: 5px 8px;
	}
	input::placeholder {
		font-family: 'Open Sans', sans-serif;
		font-size: 14px;
		font-weight: 600;
		text-align: left;
		color: #666;
	}
	.Forgot-Password {
		position: absolute;
		top: 56%;
		left: 50%;
		transform: translate(60%, -50%);
		font-family: OpenSans;
		font-size: 14px;
		font-weight: 600;
		color: #d87070;
		cursor: pointer;
	}

	.Rectangle-2 {
		position: absolute;
		top: 65%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 199.7px;
		height: 51px;
		border-radius: 25.5px;
		background-color: #ff748c;
	}
	.login-btn {
		width: 100%;
		height: 100%;
		font-family: OpenSans;
		font-size: 18px;
		font-weight: 600;
		text-align: center;
		color: #fff;
		display: flex;
		justify-content: center;
		align-items: center;
		cursor: pointer;
	}

	.sign {
		width: 100%;
		text-align: center;
		position: absolute;
		top: 75%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
	.Dont-have-an-account {
		font-family: OpenSans;
		font-size: 14px;
		text-align: center;
		color: #fff;
	}
	.Sign-Up {
		font-family: OpenSans;
		font-size: 14px;
		font-weight: 800;
		text-align: center;
		color: #d87070;
	}

	.Or-connect-with {
		position: absolute;
		top: 90%;
		left: 50%;
		transform: translate(-50%, -50%);
		font-family: 'Open Sans', sans-serif;
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

	.forgot {
		width: 375px;
		height: 386px;
		padding: 53px 16px 68px;
		border-radius: 30px 30px 0px 0px;
		background-color: #fff;
		position: absolute;
		bottom: 0%;
		left: 50%;
		transform: translate(-50%, 0);
	}
	.forgot-true {
		margin: 0 133px 17px 0;
		font-family: Raleway;
		font-size: 24px;
		font-weight: bold;
		text-align: left;
		color: #000;
	}
	.Enter-your-email-for-the-verification-process-we-will-send-4-digit-code-to-your-registered-email {
		margin: 17px 0 0;
		font-family: OpenSans;
		font-size: 14px;
		text-align: left;
		color: #000;
	}
	.forgot-Rectangle-email {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 343px;
		height: 50px;
		border-radius: 6px;
		background-color: #dddddd;
		display: flex;
	}
	.forgot-Rectangle-email input {
		color: black;
	}

	.forgot-Rectangle-2 {
		position: absolute;
		top: 75%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 199.7px;
		height: 51px;
		border-radius: 25.5px;
		background-color: #ff748c;
		cursor: pointer;
	}
	.Continue {
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		font-family: OpenSans;
		font-size: 18px;
		font-weight: 600;
		color: #fff;
	}

	.cancel {
		position: absolute;
		top: 10%;
		right: 10%;
		cursor: pointer;
	}
</style>
