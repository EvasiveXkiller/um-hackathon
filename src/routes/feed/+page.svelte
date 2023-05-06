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
		Tile,
		ImageLoader,
	} from "carbon-components-svelte";
	import Spacer from "$lib/components/Spacer.svelte";
	import Add from "carbon-icons-svelte/lib/Add.svelte";
	import { Login, ThumbsDownFilled, ThumbsUpFilled } from "carbon-icons-svelte";

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
<svelte:head>
	<title>Feed</title>
</svelte:head>
<container class="w-screen grid place-items-center">
	<Spacer height="64px"/>
	<div class="centerRenderer">
		<div class="flex flex-col gap-6" style="width: 75vw">

			<h1>Feed</h1>

			<p>You can view other people's progress here</p>

			{#each data.feed as tiles}
				<Tile>
					<h4>{tiles.username}</h4>
					<Spacer/>
					<p>{tiles.taskName}</p>
					<Spacer/>
					<ImageLoader src={`/api/v1/feed/${tiles.taskId}`}/>
					<Spacer/>
					<p>{tiles.taskLikes} likes</p>
					<Form method="POST" action="?/upvote">
						<input type="hidden" name="taskId" value={tiles.taskId}/>
						<Button iconDescription="Like this post" icon={ThumbsUpFilled} type="submit"/>
					</Form>
				</Tile>
			{/each}
		</div>
	</div>
	<Spacer height="64px"/>
</container>



