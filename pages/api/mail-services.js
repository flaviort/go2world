const mail = require('@sendgrid/mail')

mail.setApiKey(process.env.SG_KEY)

export default (req, res) => {

	const body = JSON.parse(req.body);

	console.log(body)

	const data = {
		to: 'flavioczuk@gmail.com',
		from: 'lgomes@go2world.com.br',
		subject: 'test',
		text: 'test',
	}

	mail.send(data)

	res.status(200).json({
		status: 'ok'
	})
}