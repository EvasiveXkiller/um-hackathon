<script lang="ts">
	import {
		Form,
		FormGroup,
		Checkbox,
		Button, PasswordInput, TextInput, InlineNotification, FluidForm,
	} from "carbon-components-svelte";
	import Spacer from "$lib/components/Spacer.svelte";

	export let form;
</script>

<container class="w-screen grid place-items-center">
	<Spacer height="64px"/>
	<div class="centerRenderer">
		<div class="flex flex-col gap-6" style="width: 75vw">

			<h1>Welcome back!</h1>

			{#if form?.credentials}
				<InlineNotification>
					<strong slot="title">Error: </strong>
					<strong slot="subtitle">Username or Password is incorrect</strong>
				</InlineNotification>
			{/if}

			<FluidForm on:submit method="POST">
				<FormGroup>
					<TextInput labelText="Email Address" placeholder="joe@example.com" required name="email"/>
					<Spacer></Spacer>
					<PasswordInput labelText="Password" placeholder="Enter password..." required name="password"/>
				</FormGroup>
				<Spacer/>
				<FormGroup>
					<Button size="default" type="submit">Submit</Button>
					<Button size="default" kind="secondary" href='/register'>Register</Button>
				</FormGroup>


			</FluidForm>
			<!-- Removed reset password coz it probably wont work for the moment -->
			<!--			<div class="text-clamp text-justify">-->
			<!--				<h3>Forgotten your password?</h3>-->
			<!--				<Spacer height="16px"/>-->
			<!--				<p>-->
			<!--					<Button size="default" kind="danger-tertiary">Reset Password</Button>-->

			<!--				</p>-->
			<!--			</div>-->
		</div>
	</div>
	<Spacer height="64px"/>
</container>



