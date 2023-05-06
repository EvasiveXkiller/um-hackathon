<script>
	import Spacer from "$lib/components/Spacer.svelte";
	import logo from "$lib/assets/logo.png";
	import {
		Button, ImageLoader, Theme,
	} from "carbon-components-svelte";
</script>
<svelte:head>
	<title>AMS</title>
</svelte:head>
<container class="w-screen grid place-items-center">
	<div class="centerRenderer">
		<div class="flex flex-col gap-6" style="width: 85vw">
			<div class="flex flex-row flex-wrap gap-6 justify-around items-center min-h-[50vh]">
				<Spacer height="64px"/>
				<div>
					<div class="top">
						<h1 class="text-6xl">Aaron's Maternity System</h1>
					</div>
					<Spacer/>
					<div class="bottom">
						<h2>Your baby's endgame monitoring system</h2>
					</div>
					<Spacer height="32px"/>
					<div class="morebottom">
						<Button href="/login" kind="primary"
						>Login
						</Button>
					</div>
					<Spacer/>
					<div class="morebottom">
						<Button href="/register" kind="secondary"
						>Register
						</Button>
					</div>
				</div>
				<div style="max-width: 250px">
					<ImageLoader src="{logo}"/>
				</div>
			</div>

			<Spacer height="16px"/>
			<hr/>
			<Spacer height="16px"/>

			<h1 class="w-full text-center">Features</h1>
			<Spacer height="16px"/>

			<div class="flex flex-wrap gap-6 w-full justify-around">
				<div class="grid place-items-center w-full">
					<div class="flex flex-row w-full flex-wrap gap-12 justify-around items-center">
						<div class="text-clamp text-justify">
							<h3>New Life, a new life system for those in need</h3>
							<Spacer height="16px"/>
							<p>
								<br>
								New Life, A Pregnancy Management System catered to help improve the mother’s quality of
								life
							</p>
						</div>
						<div class="text-clamp text-justify">
							<h3>Dont need to worry about your future</h3>
							<Spacer height="16px"/>
							<p>
								Coz you dont have one

								<br>

								You want to read this barren paragraph and expect something marvelous and terrific at
								the end. But since you still do not realize that you are wasting precious time, you
								still continue to read the null paragraph. If you had not noticed, you have wasted an
								estimated time of 20 seconds. Imagine what you could’ve done with those 20 seconds
								besides reading this non-productive paragraph. Imagine the things you could’ve
								accomplished. Imagine the possibilities. But time is irreversible and you still do not
								realize this. Somehow you have managed still to waste around now 35 seconds reading this
								stupid, excessive, and long paragraph with your irreversible time.
							</p>
						</div>
					</div>
				</div>
			</div>
			<Spacer height="16px"/>

		</div>
	</div>

	<Spacer height="32px"/>
</container>
