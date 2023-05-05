<script>
	import { Link, Tile } from 'carbon-components-svelte';
</script>

<Tile class="footer-under">
	<div class="footer-container">
		<div>Insert some Aaron's future baby image here</div>
		<div class="flex flex-wrap justify-evenly flex-col">
			<p>
				<i>AMS | Aaron's Maternity System</i>
			</p>
			<p>
				All Rights Reserved 2023 &copy;
				<Link href='https://evasivexkiller.com'>Team Sunway @ University Malaya</Link>
			</p>
			<p>
				<Link sveltekit:prefetch href='/privacy'>Privacy Policy</Link>
				|
				<Link sveltekit:prefetch href='/tos'>Terms of Service</Link>
			</p>
		</div>
	</div>
</Tile>

<style>
    .footer-under {
        @apply text-white font-thin leading-[1.45em] grid w-screen place-items-center;
    }

    .footer-container {
        @apply flex flex-wrap justify-center flex-row w-full items-center gap-8;
    }
</style>
