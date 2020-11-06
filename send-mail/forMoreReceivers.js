"use strict";

const nodemailer = require("nodemailer")

// async..await is not allowed in global scope, must use a wrapper
async function main(receivers) {
  // my account
  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
      user: 'murl.kuvalis@ethereal.email',
      pass: 'nS8zpVxva1dABmbf32'
    }
  })
  // send mail with defined transport object
  let text = `
    This is my text. My project is almost ready. But, I still need to program the part 
    that will send email for all users that sebscrib on newslatter 
  `
  let html = `
    <h2>My Message</h2>
    <p>This is my text. My project is <strong>almost ready</strong>.</p>
    <p> But, I still need to program the part 
    that will send email for all users that sebscrib on newslatter</p> 
  `

  let info = await transporter.sendMail({
    from: '"Fred Foo 👻" <foo@example.com>', // sender address
    to: receivers, // list of receivers
    subject: "Javascript programmer", // Subject line
    text: text, // plain text body
    html: html // html body
  })

  console.log("Message sent: %s", info.messageId)
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info))

}
// I will to receive this pf my database
var response = [
  { email: 'adriano.qwe32@gmail.com' },
  { email: 'adriano.qwe32@yahoo.com.br' },
  { email: 'adriano.qwe32@yahoo.com.br' }
]
var receivers = ''
for(let index = 0; index < response.length; index++) {
  if (index > 0) {
    receivers += ', '
  }
  receivers += response[index].email
}
console.log(receivers)
main(receivers).catch(console.error)
