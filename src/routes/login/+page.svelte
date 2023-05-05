<script>
	import {
		Form,
		FormGroup,
		Checkbox,
		Button, PasswordInput, TextInput,
	} from "carbon-components-svelte";
	import Spacer from "$lib/components/Spacer.svelte";
</script>

<container class="w-screen grid place-items-center">
	<Spacer height="64px"/>
	<div class="centerRenderer">
		<div class="flex flex-col gap-6" style="width: 75vw">

			<h1>Welcome back!</h1>

			<p></p>
			<Form on:submit method="POST">
				<FormGroup>
					<TextInput labelText="Email Address" placeholder="joe@example.com" required name="email"/>
					<Spacer></Spacer>
					<PasswordInput labelText="Password" placeholder="Enter password..." required name="password"/>
				</FormGroup>
				<FormGroup>
					<Button size="default" type="submit">Submit</Button>
					<Spacer/>
					<Button size="default" kind="danger-tertiary">Forgot Password?</Button>
				</FormGroup>

			</Form>
		</div>
	</div>
	<Spacer height="64px"/>
</container>



