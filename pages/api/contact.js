const sgMail = require('@sendgrid/mail')

const {SG_API_KEY, FROM_EMAIL, TO_EMAIL} = process.env

sgMail.setApiKey(SG_API_KEY)

export default async function handler(req, res) {
	const {name, email, phone, message} = req.body

	const msg = {
		to: TO_EMAIL,
		from: FROM_EMAIL,
		subject: 'Form test',
		html: `<p>Nome: ${name}</p>`
	}

	await sgMail.send(msg)
	res.json({ success: true })
}