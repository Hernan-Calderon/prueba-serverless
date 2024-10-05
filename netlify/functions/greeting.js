export async function handler(event) {
	const { text } = JSON.parse(event.body); // Lee el cuerpo de la solicitud

	return {
		statusCode: 200,
		body: JSON.stringify({ message: `Hello, ${text}!` }) // Devuelve una respuesta personalizada
	};
}
