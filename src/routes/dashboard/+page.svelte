<script>
	import {
		Form,
		FormGroup,
		Checkbox,
		Button, PasswordInput, TextInput, Link,
	} from "carbon-components-svelte";
	import Spacer from "$lib/components/Spacer.svelte";
</script>

<container class="w-screen grid place-items-center">
	<Spacer height="64px"/>
	<div class="centerRenderer">
		<div class="flex flex-col gap-6" style="width: 75vw">

			<h1>Dashboard</h1>

			<p>Here lies the lost thought of a midnight programmer</p>

			<Form method="POST" action="/logout">
				<Button type="submit" >Logout</Button>
			</Form>
		</div>
	</div>
	<Spacer height="64px"/>
</container>



