<div class="intro">
	<img class="logo" src="/static/intro-macaron.svg" alt="logo macaron" />

	<div class="logo-text">
		<p class="Welcome">Welcome</p>
		<p class="CRAVING-SUGAR">CRAVING SUGAR?</p>
		<p class="Create-an-account-and-enjoy-the-sugar-rush">
			Create an account<br />
			enjoy the sugar rush!
		</p>
	</div>

	<a href="/sign">
		<div class="btn-start">
			<span class="Getting-Started">Getting Started</span>
		</div>
	</a>

	<div class="already">
		<span class="Already-have-an-account"> Already have an account? </span>
		<span class="Login"><a href="/login">Login</a></span>
	</div>
</div>

<style>
	.intro {
		width: 100%;
		height: 100vh;
		position: relative;
		background-color: #ff748c;
	}
	.logo {
		position: absolute;
		top: 30%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 25rem;
		height: 25rem;
	}

	.logo-text {
		position: absolute;
		top: 65%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
	.logo-text .Welcome {
		font-family: 'Raleway', sans-serif;
		font-size: 2rem;
		font-weight: 600;
		text-align: center;
		color: #fff;
	}
	.logo-text .CRAVING-SUGAR {
		font-family: 'Raleway', sans-serif;
		font-size: 1rem;
		font-weight: 600;
		text-align: center;
		color: #fff;
	}
	.logo-text .Create-an-account-and-enjoy-the-sugar-rush {
		font-family: 'Open Sans', sans-serif;
		font-size: 0.9rem;
		text-align: center;
		color: #fff;
		word-break: keep-all;
	}

	.btn-start {
		position: absolute;
		top: 80%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 16rem;
		height: 3.1rem;
		border-radius: 100px;
		background-color: #f19d9d;
	}
	.btn-start .Getting-Started {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		font-family: 'Open Sans', sans-serif;
		font-size: 0.9rem;
		font-weight: 800;
		text-align: center;
		color: #fff;
	}

	.already {
		position: absolute;
		top: 87%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 100%;
		text-align: center;
	}
	.already .Already-have-an-account {
		font-family: 'Open Sans', sans-serif;
		font-size: 0.9rem;
		text-align: center;
		color: #fff;
	}
	.already .Login {
		font-family: 'Open Sans', sans-serif;
		font-size: 1rem;
		font-weight: 800;
		text-align: center;
		color: #303030;
	}
</style>
