<script>
	import {
		Form,
		FormGroup,
		Checkbox,
		Button,
		PasswordInput,
		TextInput,
		Link,
		SelectableTile,
		Modal,
		SkeletonPlaceholder,
		StructuredListCell,
		StructuredListRow,
		StructuredListHead,
		StructuredListBody,
		StructuredList,
		InlineNotification,
		NotificationActionButton, ImageLoader, InlineLoading,
	} from "carbon-components-svelte";
	import first from "$lib//assets/home/first.png"
	import second from "$lib//assets/home/second.png"
	import third from "$lib//assets/home/third.png"
	import Spacer from "$lib/components/Spacer.svelte";

	export let data;

	let open = false;
	let isSelected = false;
	let currentlySelectedTask = {};

	let uploadedImage;

	function handleImageUpload(e) {
		const image = (e.target)?.files?.[0];
		if (!image) return;
		// URL.createObjectURL() creates a temporary URL for the image we can use as src for an img tag
		uploadedImage = URL.createObjectURL(image);
	}
</script>

<container class="w-screen grid place-items-center">
	<Spacer height="64px"/>
	<div class="centerRenderer">
		<div class="flex flex-col gap-6" style="width: 75vw">

			<h1>Your House</h1>
			<div class="flex flex-row flex-wrap gap-6 justify-around items-center min-h-[50vh]">
				<div>
					<div class="top">
						{#if data.percentageComplete < 33.33}
							<ImageLoader src={first} fadeIn>
								<div slot="loading">
									<InlineLoading/>
								</div>
								<div slot="error">An error occurred.</div>
							</ImageLoader>
						{/if}
						{#if data.percentageComplete >= 33.33 && data.percentageComplete <= 66.66}
							<ImageLoader src={second} fadeIn>
								<div slot="loading">
									<InlineLoading/>
								</div>
								<div slot="error">An error occurred.</div>
							</ImageLoader>
						{/if}
						{#if data.percentageComplete > 66.66}
							<ImageLoader src={third} fadeIn>
								<div slot="loading">
									<InlineLoading/>
								</div>
								<div slot="error">An error occurred.</div>
							</ImageLoader>
						{/if}
					</div>
				</div>
				<div style="max-width: 250px">


					{#if data.percentageComplete >= 33.33 && data.percentageComplete <= 66.66}
						<Button href="https://commons.wikimedia.org/wiki/File:Test-Logo.svg" target="_blank">Make a
							drawing
						</Button>
					{:else}
						<Button disabled href="https://commons.wikimedia.org/wiki/File:Test-Logo.svg" target="_blank">
							Make a
							drawing
						</Button>
					{/if}

					<Spacer></Spacer>

					{#if data.percentageComplete > 66.66}
						<Button href="https://www.youtube.com/watch?v=cvh0nX08nRw" target="_blank">Play Music</Button>
					{:else}
						<Button disabled href="https://www.youtube.com/watch?v=cvh0nX08nRw" target="_blank">Play Music
						</Button>
					{/if}

					<Spacer></Spacer>

				</div>
			</div>

			<h1>Tasks</h1>

			{#if data.isTaskEmpty}
				<InlineNotification
						title="Note: "
						subtitle="Please update your health info to start your personalized task!"
				/>
			{/if}

			<div role="group" aria-label="selectable tiles">
				{#each data.userTasks as validTasks}
					<SelectableTile disabled={!Number(validTasks.currentlyActive) == 1}
					                selected="{Number(validTasks.taskCompleted) == 1}"
					                on:select={() => {
										if(Number(validTasks.taskCompleted) == 1) return
										currentlySelectedTask = validTasks;
										open = true;
					                }}>{validTasks.taskName}</SelectableTile>
				{/each}
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
				<h1>Please upload your image of your task here</h1>
				<p>This is to proof that you have completed your task</p>
				<Spacer></Spacer>

				<form method="post" enctype="multipart/form-data">
					<input type="hidden" name="taskName" value={currentlySelectedTask.taskName}/>
					<input type="hidden" name="userID" value={currentlySelectedTask.userid}/>
					<input type="file" name="taskImage" accept="image/*" on:change={handleImageUpload}/>

					{#if uploadedImage}
						<div class="mt-4">
							<img src={uploadedImage} style="max-width: 50%;" alt=""/>
						</div>
					{/if}

					<div class="mt-4 mb-6">
						<Button
								class="button is-primary is-disabled"
								type="submit"
								formaction="?/completeTask"
								disabled={!uploadedImage ?? null}
						>Upload Image
						</Button>
					</div>
				</form>


				<!--				<p>this might be helpful https://hartenfeller.dev/blog/sveltekit-image-upload-store</p>-->
			</Modal>

		</div>
	</div>
	<Spacer height="64px"/>
</container>



