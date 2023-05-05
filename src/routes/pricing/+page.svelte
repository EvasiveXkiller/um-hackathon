<script context="module">
	export const prerender = true;
</script>

<script>
	import {
		Breakpoint,
	} from 'carbon-components-svelte';
	import Spacer from '$lib/components/Spacer.svelte';

</script>

<svelte:head>
	<title>Pricing</title>
</svelte:head>
<Breakpoint on:match={(e) => (breakpoint = e.detail.size)} />

<container class="w-screen grid place-items-center">
	<div class="centerRenderer">
		<div class="flex flex-col gap-6" style="width: 75vw">
			<Spacer height="64px"/>
			<h1>Pricing</h1>

		</div>
	</div>
	<Spacer height="64px" />
</container>
