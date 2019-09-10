const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');


router.post('/', (req,res) =>{
    console.log(req.body);
   nodemailer.createTestAccount((err, account) => {
       const htmlEmail = `
       <h3>Contact Details</h3>
        <ul>
            <li>Name: ${req.body.name} </li>
            <li>Email: ${req.body.email} </li>
        <ul>
        <h3>Message</h3>
        <p>${req.body.message}</p>`

        const transporter = nodemailer.createTransport({
            host: 'smtp.ethereal.email',
            port: 587,
            auth: {
                user: 'clement.deckow9@ethereal.email',
                pass: '7qZRf6y9f5Ge2PmFvP'
            }
        });
// test account information
// no to figure out real information

//oAuth for gmail
        let mailOptions = {
            from: 'test@testaccount.com',
            to: 'clement.deckow9@ethereal.email',
            replyTo: 'test@testaccount.com',
            subject: 'new message',
            text: req.body.message,
            html: htmlEmail,
        }
        transporter.sendMail(mailOptions, (err, info) => {
            if (err) {
                return console.log(err)
            }

            console.log('message sent: %s', mailOption.text)
            console.log('Message URL: %s', nodemailer.getTestMessageUrl(info))
        })
   })
})

module.exports = router;