<script>
</script>

<div class="intro">
	<img class="logo" src="/static/intro-macaron.svg" alt="logo macaron" />

	<div class="logo-text">
		<p class="logo-text-1">Welcome</p>
		<p class="logo-text-2">CRAVING SUGAR?</p>
		<p class="logo-text-3">
			Create an account<br />
			enjoy the sugar rush!
		</p>
	</div>

	<a href="/login">
		<div class="btn-start">
			<span class="btn-start-text">Getting Started</span>
		</div>
	</a>

	<div class="create">
		<span class="create-account">Create a new account?</span>
		<span class="go"><a href="/sign">GO</a></span>
	</div>
</div>

<style>
	.intro {
		width: 100%;
		height: 100vh;
		position: relative;
		background-color: #ff748c;
	}

	/* logo macaron */
	.logo {
		position: absolute;
		top: 30%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 25rem;
		height: 25rem;
	}

	/* logo-text */
	.logo-text {
		position: absolute;
		top: 62%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
	.logo-text-1 {
		font-family: 'Raleway', sans-serif;
		font-size: 2rem;
		font-weight: 600;
		text-align: center;
		color: #fff;
	}
	.logo-text-2 {
		font-family: 'Raleway', sans-serif;
		font-size: 1rem;
		font-weight: 600;
		text-align: center;
		color: #fff;
	}
	.logo-text-3 {
		font-family: 'Open Sans', sans-serif;
		font-size: 0.9rem;
		text-align: center;
		color: #fff;
		word-break: keep-all;
	}

	/* btn-start */
	.btn-start {
		position: absolute;
		top: 77%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 16rem;
		height: 3.1rem;
		border-radius: 100px;
		background-color: #f19d9d;
	}
	.btn-start .btn-start-text {
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

	/* create */
	.create {
		position: absolute;
		top: 84%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 100%;
		text-align: center;
	}
	.create-account {
		font-family: 'Open Sans', sans-serif;
		font-size: 0.9rem;
		text-align: center;
		color: #fff;
	}
	.go {
		font-family: 'Open Sans', sans-serif;
		font-size: 1rem;
		font-weight: 800;
		text-align: center;
		color: #303030;
	}
</style>
