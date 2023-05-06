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
					<div style="max-width: 250px">
						<ImageLoader src="{logo}"/>
					</div>
				
					<Spacer/>
					<div class="bottom">
						<p>New Life, A Pregnancy Management System catered too help improve the mother's quality of life</p>
					</div>
					<Spacer height="32px"/>
					<div class="morebottom">
						<Button href="/login" kind="primary" style="width 20px; border-radius:20px; background-color:mediumpurple"
						>Login
						</Button>
					</div>
					<Spacer/>
					<div class="morebottom">
						<Button href="/register" kind="secondary" style="width 20px; border-radius:20px; background-color:gray"
						>Register
						</Button>
					</div>
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
							<p>Pregnancy Management apps are becoming a chore and end up being stressful instead? Introducing NewLife, a pregnancy app that is personalised 
								to you to ensure the smoothest delivery and most importantly it will also help reduce your burdens through gamification. 
							</p>
							<Spacer height="16px"/>
						
						</div>
						
					</div>
				</div>
			</div>
			<Spacer height="16px"/>

		</div>
	</div>

	<Spacer height="32px"/>
</container>
