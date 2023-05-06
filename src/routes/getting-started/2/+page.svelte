<script context="module">
	export const prerender = true;
</script>

<script>
	import {
		Breakpoint,
		Button,
		Checkbox, DatePicker, DatePickerInput,
		Form,
		FormGroup,
		MultiSelect,
		RadioButton,
		RadioButtonGroup,
		Select,
		SelectItem,
		TextInput,
	} from 'carbon-components-svelte';
	import Spacer from '$lib/components/Spacer.svelte';

	const diseases = [
		'None',
		'Diabetes',
		'Amniotic Anhydramnios',
		'Amniotic Normal',
		'Hypertension (Not induced by Pregnancy)',
		'Others'
	]

	let selectedDiseases = [];
</script>

<svelte:head>
	<title>Welcome !</title>
</svelte:head>
<Breakpoint on:match={(e) => (breakpoint = e.detail.size)}/>

<container class="w-screen grid place-items-center">
	<div class="centerRenderer">
		<div class="flex flex-col gap-6" style="width: 75vw">
			<Spacer height="64px"/>
			<h1>Health Contraints</h1>

			<p>Please select the disease you posses</p>

			<!--			Below this does not inject any info yet-->
			<Form on:submit method="POST">
				<MultiSelect
						on:select={(value)=> {
							selectedDiseases = value.detail.selected.map(disease => {return disease.text});
							console.log(selectedDiseases)
						}}
						light
						filterable
						titleText="You may select multiple diseases"
						label="Please select..."
						items={[
                            { id: "0", text: "None" },
                            { id: "1", text: "Diabetes" },
                            { id: "2", text: "Amniotic Anhydramnios" },
                            { id: "3", text: "Amniotic Normal" },
                            { id: "4", text: "Hypertension (Not induced by Pregnancy)" },
                            { id: "5", text: "Others" },
                        ]}
				/>
				<input type="hidden" name="diseases" value={selectedDiseases.toString()}/>
				<Spacer></Spacer>
				<Button type="submit">Continue</Button>
			</Form>
		</div>
	</div>
	<Spacer height="64px"/>
</container>
