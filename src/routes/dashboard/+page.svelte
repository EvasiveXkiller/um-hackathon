<script>
	import {
		Form,
		FormGroup,
		Checkbox,
		Button, PasswordInput, TextInput, Link, SelectableTile, Modal,
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

			<Form method="POST" action="/logout">
				<Button type="submit" >Logout</Button>
			</Form>

			<Button href="/dashboard/update-health">Update your situation on the living thing in your tummy</Button>

			<Button href="/dashboard/shop">Shop</Button>

			<h1>Tasks</h1>

			<div role="group" aria-label="selectable tiles">
				<SelectableTile disabled={isSelected} on:select={() => (open = true)}>Task 1</SelectableTile>
				<SelectableTile selected>Task 2</SelectableTile>
				<SelectableTile>Task 3</SelectableTile>
			</div>

			<Modal
					bind:open
					modalHeading="Create database"
					primaryButtonText="Confirm"
					secondaryButtonText="Cancel"
					on:click:button--secondary={() => (open = false)}
					on:open={() => {isSelected = false}}
					on:close={() => {isSelected = false}}
					on:submit
			>
				<p>Create a new Cloudant database in the US South region.</p>
			</Modal>

		</div>
	</div>
	<Spacer height="64px"/>
</container>



