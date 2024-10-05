<script>
	let inputText = '';
	let message = '';

	const getMessage = async () => {
		const response = await fetch('/.netlify/functions/greeting', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ text: inputText }) // Envía el texto del input
		});

		const data = await response.json();
		message = data.message;
	};
</script>

<input type="text" bind:value={inputText} placeholder="Escribe algo" />
<button on:click={getMessage}>Enviar</button>

<p>{message}</p>
