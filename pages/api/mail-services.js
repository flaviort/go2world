const mail = require('@sendgrid/mail')

mail.setApiKey(process.env.SG_KEY)

// eslint-disable-next-line import/no-anonymous-default-export
export default (req, res) => {

	const body = JSON.parse(req.body);

	const message = `
		Formulário enviado através da página: Go2World | ${body.page_title}\r\n
		-------------------------\r\n\r\n

		Nome: ${body.service_name}\r\n
		Email: ${body.service_email}\r\n
		Telefone: ${body.service_phone}\r\n\r\n

		Mensagem:\r\n
		${body.service_message.replace(/\n/g, '\r\n')}\r\n
	`;

	console.log(message)

	const data = {
		to: 'flavioczuk@gmail.com',
		from: 'lgomes@go2world.com.br',
		subject: `Formulário de contato Go2World | ${body.page_title}`,
		text: message,
		html: message.replace(/\r\n/g, '<br />')
	}

	mail.send(data)
		.then(() => {
			res.status(200).json({
				status: 'success',
				message: 'Message sent successfully.'
			});
		})
		.catch(error => {
			console.error('Error sending message:', error);
			res.status(500).json({
				status: 'error',
				message: 'Failed to send message.'
			});
		});
}