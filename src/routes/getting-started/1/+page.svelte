<script>
	import {
		Breakpoint,
		Button,
		Checkbox, DatePicker, DatePickerInput,
		FluidForm,
		Form,
		FormGroup,
		RadioButton,
		RadioButtonGroup,
		Select,
		SelectItem,
		TextInput,
	} from 'carbon-components-svelte';
	import Spacer from '$lib/components/Spacer.svelte';

</script>

<svelte:head>
	<title>Welcome !</title>
</svelte:head>
<Breakpoint on:match={(e) => (breakpoint = e.detail.size)}/>

<container class="w-screen grid place-items-center">
	<div class="centerRenderer">
		<div class="flex flex-col gap-6" style="width: 75vw">
			<Spacer height="64px"/>
			<h1>Welcome!</h1>

			<p>We hope you brought cookies</p>

			<p>Now enter your personal details</p>

			<!--			Below this does not inject any info yet-->
			<FluidForm on:submit method="POST">
				<TextInput labelText="Age" placeholder="Eg. 18" required name="age"/>
				<Spacer/>
				<TextInput labelText="Height (CM)" placeholder="Eg.185" required name="height"/>
				<Spacer/>
				<TextInput labelText="Weight (KG)" placeholder="Eg. 35" required name="weight"/>
				<Spacer/>
				<h3>What is your baby's name?</h3>
				<TextInput labelText="Baby's Name" placeholder="Tom Scott" required name="babyName"/>
				<Spacer/>
				<p>When was your last menstrual cycle</p>
				<small>This can be used to estimate the birth date</small>
				<Spacer/>
				<DatePicker datePickerType="single" on:change>
					<DatePickerInput placeholder="mm/dd/yyyy" name="lastCycleDate"/>
				</DatePicker>
				<Spacer></Spacer>
				<Button type="submit">Continue</Button>
				<Spacer height="128px"></Spacer>

			</FluidForm>
		</div>
	</div>
	<Spacer height="64px"/>
</container>
