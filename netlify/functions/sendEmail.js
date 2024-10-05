const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export async function handler(event, context) {
	const { email, subject, message } = JSON.parse(event.body);

	const msg = {
		to: email, // Correo de destino
		from: {
			email: 'inforentabiliza@gmail.com',
			name: 'Equipo Rentabiliza' // Añade el nombre aquí
		}, // Correo del remitente
		subject: subject,
		text: message
	};

	try {
		await sgMail.send(msg);
		return {
			statusCode: 200,
			body: JSON.stringify({ message: 'Correo enviado con éxito' })
		};
	} catch (error) {
		return {
			statusCode: 500,
			body: JSON.stringify({ error: 'Error enviando correo' })
		};
	}
}
