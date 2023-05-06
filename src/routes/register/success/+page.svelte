<script>
	import {
		Form,
		FormGroup,
		Checkbox,
		Button, PasswordInput, TextInput, InlineNotification,
	} from "carbon-components-svelte";
	import Spacer from "$lib/components/Spacer.svelte";
	import { redirect } from "@sveltejs/kit";

</script>
<svelte:head>
	<title>Registration Success!</title>
</svelte:head>
<container class="w-screen grid place-items-center">
	<Spacer height="64px"/>
	<div class="centerRenderer">
		<div class="flex flex-col gap-6" style="width: 75vw">

			<h1>Congratulations!</h1>

			<p>You have been registered!</p>
			<p>Click the below button to login</p>

			<Button href="/login" style="border-radius: 20px; background-color:mediumpurple">Login</Button>
		</div>
	</div>
	<Spacer height="64px"/>
</container>



