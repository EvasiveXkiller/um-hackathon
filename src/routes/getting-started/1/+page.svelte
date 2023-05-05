<script context="module">
	export const prerender = true;
</script>

<script>
	import {
		Breakpoint, Button, Checkbox, Form, FormGroup, RadioButton, RadioButtonGroup, Select, SelectItem, TextInput,
	} from 'carbon-components-svelte';
	import Spacer from '$lib/components/Spacer.svelte';

</script>

<svelte:head>
	<title>Pricing</title>
</svelte:head>
<Breakpoint on:match={(e) => (breakpoint = e.detail.size)}/>

<container class="w-screen grid place-items-center">
	<div class="centerRenderer">
		<div class="flex flex-col gap-6" style="width: 75vw">
			<Spacer height="64px"/>
			<h1>Welcome!</h1>

			<p>We hope you brought cookies</p>

			<p>Now enter your personal details</p>

			<!--			Below this does not inject any info yet-->
			<Form on:submit method="POST" action="/getting-started/2">
				<TextInput labelText="Age" placeholder="Eg. 18" required name="age"/>
				<TextInput labelText="Height (CM)" placeholder="Eg.185" required name="height"/>
				<TextInput labelText="Weight (KG)" placeholder="Eg. 35" required name="Weight"/>
				<Spacer></Spacer>
				<Button type="submit">Continue</Button>
			</Form>
		</div>
	</div>
	<Spacer height="64px"/>
</container>
