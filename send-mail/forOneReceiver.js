"use strict";

const nodemailer = require("nodemailer")

// async..await is not allowed in global scope, must use a wrapper
async function main() {
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
    to: "adriano.qwe32@gmail.com", // list of receivers
    subject: "Javascript programmer", // Subject line
    text: text, // plain text body
    html: html // html body
  })

  console.log("Message sent: %s", info.messageId)  
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info))
  
}

let receivers = [
  'adriano.qwe32@gmail.com',
  'adriano.qwe32@yahoo.com.br'
]

main().catch(console.error)
