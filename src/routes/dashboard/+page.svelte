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

			<h1>Dashboard</h1>

			<p>Here lies the lost thought of a midnight programmer</p>

			<Button href="/logout">Logout</Button>
		</div>
	</div>
	<Spacer height="64px"/>
</container>



