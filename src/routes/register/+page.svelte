<script>
	import {
		Form,
		FormGroup,
		Checkbox,
		Button, PasswordInput, TextInput, InlineNotification, FluidForm,
	} from "carbon-components-svelte";
	import Spacer from "$lib/components/Spacer.svelte";

	export let form;
</script>
<svelte:head>
	<title>Register</title>
</svelte:head>
<container class="w-screen grid place-items-center">
	<Spacer height="64px"/>
	<div class="centerRenderer">
		<div class="flex flex-col gap-6" style="width: 75vw">

			<h1>Welcome!</h1>

			<p>We have never been more excited to have you onboard! Just fill in the below to get
				started!</p>

			{#if form?.exists}
				<InlineNotification>
					<strong slot="title">Error: </strong>
					<strong slot="subtitle">User Exists! Please login using credentials</strong>
				</InlineNotification>
			{/if}
			<FluidForm on:submit method="POST">
				<FormGroup>
					<TextInput labelText="Email Address" placeholder="joe@example.com" required name="email"/>
					<Spacer></Spacer>
					<TextInput labelText="Display Name" placeholder="Make a memorable one ..." required
					           name="displayName"/>
					<Spacer></Spacer>
					<PasswordInput labelText="Password" placeholder="Enter password..." required name="password"/>
				</FormGroup>
				<Spacer/>
				<FormGroup legendText="Checkboxes">
					<Checkbox id="checkbox-0"
					          labelText="I agree to the Terms and Conditions (Can be found at link located at the end of the page)"
					          required/>
				</FormGroup>
				<Spacer/>
				<Button type="submit" style="border-radius: 20px; background-color:mediumpurple;">Submit</Button>
			</FluidForm>

			<h3>Have an account?</h3>
			<p>
				<Button href="/login" style="border-radius: 20px; background-color:mediumpurple;">Login</Button>
			</p>
			<Spacer/>
		</div>
	</div>
	<Spacer height="64px"/>
</container>



