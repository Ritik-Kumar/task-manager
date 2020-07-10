const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'ritikkumarrcf@gmail.com',
    subject: 'Welcome to our App Task-Manager',
    text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
  })
}

const sendCancelationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'ritikkumarrcf@gmail.com',
    subject: 'Sorry to see you Go',
    text: `We are Sorry to see you go ${name}. Hope to see you again. Let us know if you have any issues. We would be happy to solve the issues.`
  }).then(() => {
    console.log('Status: SUCCESS')
  }).catch((e) => {
    console.log('Status: ERROR', e)
  })
}

module.exports = {
  sendWelcomeEmail,
  sendCancelationEmail
}