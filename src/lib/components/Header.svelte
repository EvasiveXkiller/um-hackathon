<script>
	import {
		Header,
		HeaderNav,
		HeaderNavItem,
		SideNav,
		SideNavItems,
		SideNavLink,
		SkipToContent
	} from 'carbon-components-svelte';

	let isSideNavOpen = false;
	const directions = [
		{
			text: 'Home',
			link: '/'
		},
		{
			text: 'About Us',
			link: '/about'
		},
		{
			text: 'Pricing',
			link: '/pricing'
		},
		{
			text: 'Contact Us',
			link: '/contact'
		}
	];
</script>

<Header persistentHamburgerMenu={true} platformName="AMS" bind:isSideNavOpen>
	<div slot="skip-to-content">
		<SkipToContent />
	</div>

	<HeaderNav>
		{#each directions as d}
			<HeaderNavItem href={d.link} text={d.text} sveltekit:prefetch/>
		{/each}
	</HeaderNav>
</Header>

<SideNav bind:isOpen={isSideNavOpen}>
	<SideNavItems>
		{#each directions as d}
			<SideNavLink href={d.link} text={d.text} />
		{/each}
	</SideNavItems>
</SideNav>
