<script>
	import {
		Button,
		Form, InlineNotification,
		Link, Modal, Tile,
	} from "carbon-components-svelte";
	import Spacer from "$lib/components/Spacer.svelte";

	let open = false;
	export let form = {};
</script>

<container class="w-screen grid place-items-center">
	<Spacer height="64px"/>
	<div class="centerRenderer">
		<div class="flex flex-col gap-6" style="width: 75vw">
			<h1>Shop</h1>
			<p>You can buy stuff here</p>
			{#if form?.message === "Insufficient funds"}
				<InlineNotification
						title="Error:"
						subtitle="You dont have enough funds to buy"
				/>
			{/if}
			<div class="flex flex-col gap-6">
				{#each [1, 2, 3, 4, 5, 6, 6, 7, 7] as command}
					<Tile on:click={() => (open = true)} class="">
						<div class="grid place-items-center items-center">
							<div>{command}</div>
						</div>
					</Tile>

				{/each}
			</div>


			<Modal
					bind:open
					modalHeading="Create database"
					primaryButtonText="Confirm"
					secondaryButtonText="Cancel"
					on:click:button--secondary={() => (open = false)}
					on:open
					on:close
					on:submit
			>
				<Form method="POST">
					<input type="hidden" name="cost" value="100"/>
					<Button type="submit" kind="primary">Buy</Button>
				</Form>
			</Modal>

		</div>
	</div>
	<Spacer height="64px"/>
</container>



