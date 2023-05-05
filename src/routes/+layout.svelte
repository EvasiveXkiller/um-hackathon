<script>
	import "../app.css";
	import 'carbon-components-svelte/css/g90.css';
	import Header from '$lib/Header.svelte';
	import Footer from '$lib/Footer.svelte';

	export let segment;

	let offsetHeight = 0;
	let innerHeight = 0;
</script>

<Header {segment} />

<svelte:window bind:innerHeight />
<main bind:offsetHeight class='overflow-hidden'>
	<slot />
</main>
<footer class:stuck={offsetHeight < innerHeight}>
	<Footer />
</footer>

<style>
    .stuck {
        @apply fixed bottom-0 w-screen;
    }
</style>
