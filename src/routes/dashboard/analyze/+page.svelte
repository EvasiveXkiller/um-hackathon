<script>
	import {
		Breakpoint,
		Button,
		Checkbox,
		Form,
		FormGroup,
		NumberInput,
		RadioButton,
		RadioButtonGroup,
		Select,
		SelectItem,
		TextInput,
	} from 'carbon-components-svelte';
	import Spacer from '$lib/components/Spacer.svelte';

</script>

<svelte:head>
	<title>Analyze</title>
</svelte:head>
<Breakpoint on:match={(e) => (breakpoint = e.detail.size)}/>

<container class="w-screen grid place-items-center">
	<div class="centerRenderer">
		<div class="flex flex-col gap-6" style="width: 75vw">
			<Spacer height="64px"/>
			<h1>Analyze your baby situation</h1>

			<p>Enter the following data, to be analyzed by our AI model</p>

			<Form on:submit method="POST">
				<NumberInput min={0} step={0.1} label="Systolic Blood Pressure (mmHg)" required name="systolic"/>
				<NumberInput min={0} step={0.1} label="Diastolic Blood Pressure (mmHh)" required name="diastolic"/>
				<NumberInput min={0} step={0.1} label="Blood Sugar (mmol/L)" required name="sugar"/>
				<NumberInput min={0} step={0.1} label="Body Temp (In Fahrenheits)" required name="temp"/>
				<NumberInput min={0} step={0.1} label="Heart Rate (BPM)" required name="hr"/>
				<Spacer></Spacer>
				<Button type="submit" style="border-radius: 20px; background-color: mediumpurple;">Continue</Button>
				<Spacer/>
				<Button href="/dashboard" kind="danger-tertiary" style="border-radius: 20px;">Cancel</Button>
			</Form>
			<Spacer height="64px"/>
		</div>
	</div>
	<Spacer height="64px"/>
</container>
