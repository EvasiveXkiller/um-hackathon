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
	let currentlySelected = false;
	export let form = {};

	const tilesData = [
		{
			title: "Piano",
			description: "With piano skills, your child would be able to play music pieces for you!",
			image: piano
		},
		{
			title: "Writing",
			description: "Learning how to write could be tough, but with patience and guidance, your child would love to write!",
			image: pen
		}
	]

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
				{#each tilesData as iData}
					<Tile on:click={() => {
						open = true;
						currentlySelected = iData
					}} class="">
						<div class="flex flex-row items-start">
							<div class="flex flex-col mr-4">
								<h3 class="text-2x1 font-bold mr-4">{iData.title}</h3>
								<div>{iData.description}</div>
								<button class="mt-4 bg-purple-500 text-white px-4 py-2 rounded-md">Buy</button>
							</div>
							<div class="w-full"><img src={iData.image} alt={`${iData.title}`} class="w-full"></div>
						</div>
					</Tile>
				{/each}
			</div>
			<Modal
					bind:open
					modalHeading="Buy {currentlySelected.title} skill?"
					primaryButtonText="Cancel"
					on:click:button--primary={() => (open = false)}
					on:open
					on:close
			>
				<div>
					<p style="text-align: left">
						{currentlySelected.description}
						<InlineNotification kind="info" style="width: 100%">This action would cost 100 coins</InlineNotification>
					</p>
					<ImageLoader src="{currentlySelected.image}"/>
					<Spacer/>
					<Form method="POST">
						<input type="hidden" name="cost" value="100"/>
						<Button type="submit" kind="primary">Buy</Button>
					</Form>
					<Spacer/>
				</div>
			</Modal>
		</div>
	</div>
	<Spacer height="64px"/>
</container>



