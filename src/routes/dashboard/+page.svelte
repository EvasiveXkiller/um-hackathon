<script>
	import {
		Form,
		FormGroup,
		Checkbox,
		Button, PasswordInput, TextInput, Link, SelectableTile, Modal, SkeletonPlaceholder,
	} from "carbon-components-svelte";
	import Spacer from "$lib/components/Spacer.svelte";

	let open = false;
	let isSelected = false;
</script>

<container class="w-screen grid place-items-center">
	<Spacer height="64px"/>
	<div class="centerRenderer">
		<div class="flex flex-col gap-6" style="width: 75vw">

			<h1>Dashboard</h1>

			<p>Here lies the lost thought of a midnight programmer</p>

			<Form method="POST" action="/logout?/GET">
				<Button href="/dashboard/shop">Shop</Button>
				<Button type="submit">Logout</Button>
			</Form>

			<SkeletonPlaceholder style="height: 12rem; width: 100vh"/>

			<h1>Tasks</h1>

			<div role="group" aria-label="selectable tiles">
				<SelectableTile disabled={isSelected} on:select={() => (open = true)}>Task 1</SelectableTile>
				<SelectableTile selected>Task 2</SelectableTile>
				<SelectableTile>Task 3</SelectableTile>
			</div>

			<Modal
					bind:open
					modalHeading="Upload Image Modal"
					primaryButtonText="Confirm"
					secondaryButtonText="Cancel"
					on:click:button--secondary={() => (open = false)}
					on:open={() => {isSelected = false}}
					on:close={() => {isSelected = false}}
					on:submit
			>
				<p>insert upload logic here</p>
				<p>this might be helpful https://hartenfeller.dev/blog/sveltekit-image-upload-store</p>
			</Modal>

		</div>
	</div>
	<Spacer height="64px"/>
</container>



