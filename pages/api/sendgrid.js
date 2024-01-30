const mail = require('@sendgrid/mail')

mail.setApiKey(process.env.SG_KEY)

// eslint-disable-next-line import/no-anonymous-default-export
export default (req, res) => {

	const body = JSON.parse(req.body)

	// convert the JSON object into an array of key-value pairs
    const keyValuePairs = Object.entries(body)

    // map each key-value pair to a string with the format "key: value"
    const formattedData = keyValuePairs.map(([key, value]) => `
		<tr style='vertical-align: top;'>
			<td style='padding: 10px; border: 1px solid #ccc; background-color: #f2f2f2; font-size: 14px; line-height: 1.25; color: #282828;'>
				<strong>${key}:</strong>
			</td>
			<td style='padding: 10px; border: 1px solid #ccc; font-size: 14px; line-height: 1.25; color: #282828;'>
				${value}
			</td>
		</tr>
	`).join('')

	const message = `
		<div style='background-color: #f3f2f0; padding: 50px 20px; font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', 'Fira Sans', Ubuntu, Oxygen, 'Oxygen Sans', Cantarell, 'Droid Sans', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Lucida Grande', Helvetica, Arial, sans-serif;'>
			<div style='display: block; margin: auto; background-color: #fff; padding: 40px; width: 520px; max-width: 520px'>
				
				<p style='font-size: 18px; color: #282828;'>
					<strong>Formulário enviado através do site Go2World</strong>
				</p>
				
				<hr><br />

				<table style='border-collapse: collapse; border: 0; width: 100%;' cellspacing='0' cellpadding='0'>
					<tbody>
						${formattedData}
					</tbody>
				</table>

			</div>
		</div>
	`;

	const data = {
		to: 'fbarros@go2world.com.br',
		from: 'lgomes@go2world.com.br',
		subject: `Formulário de contato do site Go2World`,
		text: message,
		html: message
	}

	mail.send(data)
		.then(() => {
			res.status(200).json({
				status: 'success'
			})
		})
		.catch(error => {
			console.error('Error sending message:', error)

			res.status(500).json({
				status: 'error'
			})
		})
}