const sgMail = require('@sendgrid/mail')

const sendgridAPIKey = process.env.SENDGRID_API_KEY

sgMail.setApiKey(sendgridAPIKey)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'rachit.rp16@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendCancellationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'rachit.rp16@gmail.com',
        subject: 'We are sorry to see you leave!',
        text: `Goodbye, ${name}!. We hope to see you back some time soon.`
    })
}
module.exports = {
    sendWelcomeEmail,
    sendCancellationEmail
}
