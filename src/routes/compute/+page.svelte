<!--TODO MAKE IT LOOK BETTER AND WORK BETTER IDK I DONT HAVE ANY IDEA NOW-->

<html>
<body>
<script src="https://cdn.jsdelivr.net/npm/onnxjs/dist/onnx.min.js"></script>
<script>
	function getStandardDeviation(array) {
		const n = array.length
		const mean = array.reduce((a, b) => a + b) / n
		return Math.sqrt(array.map(x => Math.pow(x - mean, 2)).reduce((a, b) => a + b) / n)
	}

	async function test() {
		const queryString = window.location.search;
		const urlParams = new URLSearchParams(queryString);

		const values = [urlParams.get('age'), urlParams.get('sys'), urlParams.get('dias'), urlParams.get('sugar'), urlParams.get('temp'), urlParams.get('hr')]
		console.log(values)
		const classes = ["Low Risk", "Medium Risk", "High Risk"]

		const sess = new onnx.InferenceSession()
		await sess.loadModel("src/lib/onnx/onnx_model.onnx")

		let total = 0;
		for(let i = 0; i < values.length; i++) {
			total += values[i];
		}
		let avg = total / values.length;
		let std = getStandardDeviation(values)
		// Get standard score
		for(let i = 0; i < values.length; i++) {
			values[i] = (values[i] - avg) / std
		}

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
