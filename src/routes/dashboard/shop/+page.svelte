<script>
	import {
		Button,
		Form, InlineNotification,
		Link, Modal, Tile,
		ImageLoader,
	} from "carbon-components-svelte";
	import Spacer from "$lib/components/Spacer.svelte";
	import piano from '$lib/assets/image 16.png'
	import pen from '$lib/assets/image 17.png'


	let open = false;
	export let form = {};

	const images = [piano, pen];
	const descriptions = [
		'With piano skills, your child would be able to play music pieces for you!',
		'Learning how to write could be tough, but with patience and guidance, your child would love to write!'
	]
	const titles = ["Piano", "Writing"];
</script>

<svelte:head>
	<title>Talent Shop</title>
</svelte:head>

<container class="w-screen grid place-items-center">
	<Spacer height="64px"/>
	<div class="centerRenderer">
		<div class="flex flex-col gap-6 text-center" style="width: 75vw">
			<h1>Talent Shop</h1>
			<p>Acquire new skills for your child with points</p>
			{#if form?.message === "Insufficient funds"}
				<InlineNotification
						title="Error:"
						subtitle="You dont have enough funds to buy"
				/>
			{/if}
			<div class="flex flex-col gap-3">
				{#each images as image, index}
					<Tile on:click={() => (open = true)} class="">
						<div class="flex flex-row items-start">
							<div class="flex flex-col mr-4">
								<h3 class="text-2x1 font-bold mr-4">{titles[index]}</h3>
								<div>{descriptions[index]}</div>
								<button class="mt-4 bg-purple-500 text-white px-4 py-2 rounded-md">Buy</button>
							</div>
							<div class="w-full"><img src={image} alt={'Image ${index + 1}'} class="w-full"></div>
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



