<script>
	import "../app.css";
	import 'carbon-components-svelte/css/white.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { page } from '$app/stores'
	import { Theme } from "carbon-components-svelte";

	export let segment;

	let offsetHeight = 0;
	let innerHeight = 0;
</script>

<Theme
		theme="white"
		tokens={{
    "interactive-01": "#6929C4",
    "hover-primary": "#6929C4",
    "active-primary": "#6929C4",
  }}
/>

<Header {segment}/>

<svelte:window bind:innerHeight/>
<main bind:offsetHeight class='overflow-hidden'>
	<slot/>
</main>
<footer class:stuck={offsetHeight < innerHeight}>
	<Footer/>
</footer>

<style>
    .stuck {
        @apply fixed bottom-0 w-screen;
    }
</style>
