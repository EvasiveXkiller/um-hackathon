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
			text: 'Dashboard',
			link: '/dashboard'
		},
		{
			text: 'House',
			link: '/house'
		},
		{
			text: 'Shop',
			link: '/dashboard/shop'
		},
		{
			text: 'Analyze',
			link: '/dashboard/analyze'
		},
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
