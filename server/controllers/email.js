const config = require('../utils/config')
const emailRouter = require('express').Router();
const nodemailer = require('nodemailer');

const transport = {
    host: 'smtpa.kolumbus.fi', // Don’t forget to replace with the SMTP host of your provider
    port: 587,
    auth: {
    user: config.EMAILUSER,
    pass: config.EMAILPASS
  }
}

const transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take messages');
  }
});

emailRouter.post('/', (req, res) => {
  console.log("Hi...")
  console.log(req.body)
  const email = req.body.email
  const message = req.body.message
  const content = `${email} \n ${message} `

  const mail = {
    from: email,
    to: process.env.NODE_ENV === 'production' ? 'heli.kuparinen2kolumbus.fi' : 'jmkupa@utu.fi',  // Change to email address that you want to receive messages on
    subject: 'Joku on ottanut sinuun yhteyttä kotisivujesi kautta!',
    text: content
  }

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        status: 'fail'
      })
    } else {
      res.json({
       status: 'success'
      })
    }
  })
})

module.exports = emailRouter