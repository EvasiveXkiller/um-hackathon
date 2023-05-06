<html>
<body>
<script src="https://cdn.jsdelivr.net/npm/onnxjs/dist/onnx.min.js"></script>
<script>
	async function test() {
		const queryString = window.location.search;
		const urlParams = new URLSearchParams(queryString);

		const values = [urlParams.get('age'), urlParams.get('sys'), urlParams.get('dias'), urlParams.get('sugar'), urlParams.get('temp'), urlParams.get('hr')]
		const classes = ["Low Risk", "Medium Risk", "High Risk"]

		const sess = new onnx.InferenceSession()
		await sess.loadModel("src/lib/onnx/onnx_model.onnx")

		const input = new onnx.Tensor(values, 'float32', [1, 6])
		console.log(input)
		const outputMap = await sess.run([input])
		const outputTensor = outputMap.values().next().value

		const riskLevel = classes[outputTensor.data.indexOf(Math.max(...outputTensor.data))]
		console.log(riskLevel)
		alert(`Your Baby is ${riskLevel}`)
		window.location = '/dashboard'
	}

	test()
</script>
</body>
</html>
