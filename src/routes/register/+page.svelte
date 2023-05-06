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

<container class="w-screen grid place-items-center">
	<Spacer height="64px"/>
	<div class="centerRenderer">
		<div class="flex flex-col gap-6" style="width: 75vw">

			<h1>Welcome!</h1>

			<p>We have never been more excited to have you onboard! Just fill in a few short information to get
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
					          labelText="I agree to whatever is going on with my data and i wont sue you " required/>
				</FormGroup>
				<Spacer/>
				<Button type="submit">Submit</Button>
			</FluidForm>

			<h3>Have an account?</h3>
			<p>
				<Button href="/login">Login</Button>
			</p>
			<Spacer/>
		</div>
	</div>
	<Spacer height="64px"/>
</container>



