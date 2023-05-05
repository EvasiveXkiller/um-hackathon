<script>
	import {
		Form,
		FormGroup,
		Checkbox,
		Button, PasswordInput, TextInput, RadioButton, RadioButtonGroup, SelectItem, Select,
	} from "carbon-components-svelte";
	import Spacer from "$lib/components/Spacer.svelte";
</script>

<container class="w-screen grid place-items-center">
	<Spacer height="64px"/>
	<div class="centerRenderer">
		<div class="flex flex-col gap-6" style="width: 75vw">

			<h1>Welcome!</h1>

			<p>We have never been more excited to have you onboard! Just fill in a few short information to get
				started!</p>
			<script>
				import {
					Form,
					FormGroup,
					Checkbox,
					RadioButtonGroup,
					RadioButton,
					Select,
					SelectItem,
					Button,
				} from "carbon-components-svelte";
			</script>

			<Form on:submit>
				<FormGroup legendText="Checkboxes">
					<Checkbox id="checkbox-0" labelText="Checkbox Label" checked />
					<Checkbox id="checkbox-1" labelText="Checkbox Label" />
					<Checkbox id="checkbox-2" labelText="Checkbox Label" disabled />
				</FormGroup>
				<FormGroup legendText="Radio buttons">
					<RadioButtonGroup name="radio-button-group" selected="default-selected">
						<RadioButton
								id="radio-1"
								value="standard"
								labelText="Standard Radio Button"
						/>
						<RadioButton
								id="radio-2"
								value="default-selected"
								labelText="Default Selected Radio Button"
						/>
						<RadioButton
								id="radio-4"
								value="disabled"
								labelText="Disabled Radio Button"
								disabled
						/>
					</RadioButtonGroup>
				</FormGroup>
				<FormGroup>
					<Select id="select-1" labelText="Select menu" value="placeholder-item">
						<SelectItem
								disabled
								hidden
								value="placeholder-item"
								text="Choose an option"
						/>
						<SelectItem value="option-1" text="Option 1" />
						<SelectItem value="option-2" text="Option 2" />
						<SelectItem value="option-3" text="Option 3" />
					</Select>
				</FormGroup>
				<Button type="submit">Submit</Button>
			</Form>

		</div>
	</div>
	<Spacer height="64px"/>
</container>



