<script>
	import Spacer from "$lib/components/Spacer.svelte";
	import { Button, Column, Content, Grid, Row, Tile } from "carbon-components-svelte";
</script>

<section class="grid place-items-center h-[90vh] w-full">
	<Content>
		<Grid>
			<Row>
				<Column>
					<Tile>
						<h1>This page is intentionally empty</h1>
					</Tile>
				</Column>
			</Row>
			<Spacer height="32px"/>
			<Row>
				<Column>
					<h2>Welcome to the Aperture Science Test Chamber 4</h2>
				</Column>
			</Row>
			<Spacer height="16px"/>
			<Row>
				<Column>
					<div class="grid place-items-center w-full">
						<Button kind="tertiary" href="/">Homepage</Button>
					</div>
				</Column>
			</Row>
		</Grid>
	</Content>
	<Spacer height="64px"/>
</section>
