<script>
	import Spacer from '$lib/components/Spacer.svelte';
	import {
		Button,
		FormGroup, ListItem, OrderedList,
		StructuredList,
		StructuredListBody, StructuredListCell,
		StructuredListHead,
		StructuredListRow
	} from 'carbon-components-svelte';
	import { InlineCalendar } from 'svelte-calendar';
	import dayjs from 'dayjs';

	const theme = {
		calendar: {
			width: '600px',
			shadow: '0px 0px 5px rgba(0, 0, 0, 0.25)'
		}
	};

	let store;
	export let data;
</script>

<container class="w-screen grid place-items-center">
	<Spacer height="64px"/>
	<div class="centerRenderer">
		<div class="flex flex-col gap-6" style="width: 75vw">
			<h1>Your expected timeline for</h1>
			<Spacer/>
			<StructuredList>
				<StructuredListHead>
					<StructuredListRow head/>
				</StructuredListHead>
				<StructuredListBody>
					<StructuredListRow>
						<StructuredListCell noWrap>Diseases</StructuredListCell>
						<StructuredListCell>{data.diseases ?? "-"}</StructuredListCell>
					</StructuredListRow>
					<StructuredListRow>
						<StructuredListCell noWrap>Risk Level</StructuredListCell>
						<StructuredListCell>Medium Risk</StructuredListCell>
					</StructuredListRow>
					<StructuredListRow>
						<StructuredListCell noWrap>Expected Due Date</StructuredListCell>
						<StructuredListCell>{data.expectedDate}</StructuredListCell>
					</StructuredListRow>
				</StructuredListBody>
			</StructuredList>
			<h1>Scroll down to see your timeline</h1>
			<Spacer/>
			<div class="flex flex-row flex-wrap gap-6 justify-around items-center min-h-[50vh]">
				<div>
					<InlineCalendar bind:store {theme} selected="{data.initDate}"/>
				</div>
				<div style="max-width: 250px">
					<FormGroup>
						<Button class="day" on:click={() => store.add(-14, 'day')}>Prev. Appointment</Button>
						<Spacer height="6px"/>
						<p class="text-center">
							{dayjs($store?.selected).format('MM/DD/YYYY')}
						</p>
						<Spacer height="6px"/>
						<Button class="day" on:click={() => store.add(14, 'day')}>Next Appointment</Button>
						<Spacer height="6px"/>
						<Button class="day" kind="danger-tertiary" on:click={() => {location.reload()}}>Reset Calendar
						</Button>
					</FormGroup>
				</div>
			</div>

			<h1>First Trimester (Week 1 - 12)</h1>
			<OrderedList>
				<ListItem>Immediately seek professional help from doctors to examine your health and pregnancy
					diagnosis.
				</ListItem>
				<ListItem>Seek a diabetes management plan from your healthcare provider.</ListItem>
				<ListItem>During the first trimester, your baby will develop normally. However, to minimize risks, you
					need to manage your disease strictly.
				</ListItem>
				<ListItem>Eat foods in smaller portions and consume foods high in vitamins and fibre</ListItem>
			</OrderedList>

			<h1>Second Trimester (Week 13 - 26)</h1>
			<OrderedList>
				<ListItem>Have frequent and scheduled checkups to ensure that your pregnancy goes smoothly
				</ListItem>
				<ListItem>You will require more insulin as your baby grows</ListItem>
				<ListItem>During the second trimester, your baby will be expected to grow normally.
				</ListItem>
			</OrderedList>

			<h1>Third Trimester (Week 27 - End)</h1>
			<OrderedList>
				<ListItem>Attend scheduled appointments to ensure baby’s growth are at normal rates and sugar levels are
					optimal
				</ListItem>
				<ListItem>Seek for care to ensure that you are safe at all times</ListItem>
				<ListItem>During the third trimester, your baby will develop normally with great diet principles and
					plan.
				</ListItem>
				<ListItem>As you approach your due date, you may consult with the doctor to approach with cesarean
					delivery to reduce risk of complications due to health issues.
				</ListItem>
			</OrderedList>


			<Button href="/dashboard" style="border-radius: 20px; background-color: mediumpurple;">Back to Dashboard</Button>

		</div>
	</div>
	<Spacer height="64px"/>
</container>
