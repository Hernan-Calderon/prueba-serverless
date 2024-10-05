<script>
	let inputText = '';
	let message = '';
	let selectedEmail = '';
	let selectedSubject = '';
	let selectedMessage = '';

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

	const sendEmail = async () => {
		try {
			const response = await fetch('/.netlify/functions/sendEmail', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					email: selectedEmail,
					subject: selectedSubject,
					message: selectedMessage
				})
			});
			const result = await response.json();
			console.log(result.message);
		} catch (error) {
			console.error('Error enviando el correo', error);
		}
	};
</script>

<input type="text" bind:value={inputText} placeholder="Escribe algo" />
<button on:click={getMessage}>Enviar</button>

<p>{message}</p>

<form on:submit|preventDefault>
	<label for="email">Email:</label>
	<input bind:value={selectedEmail} type="email" id="email" name="email" required />
	<label for="subject">Asunto:</label>
	<input bind:value={selectedSubject} type="text" id="subject" name="subject" required />
	<label for="message">Mensaje:</label>
	<textarea bind:value={selectedMessage} id="message" name="message" required />
	<button type="submit" on:click={sendEmail}>Enviar</button>
</form>
