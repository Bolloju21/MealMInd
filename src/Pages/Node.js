const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  service: 'Gmail', // or any email service
  auth: {
    user: 'your-email@gmail.com', // Your email
    pass: 'your-email-password', // Your email password
  },
});

app.post('/send-email', (req, res) => {
  const { to, subject, body } = req.body;

  const mailOptions = {
    from: 'your-email@gmail.com',
    to,
    subject,
    text: body,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      return res.status(500).send('Failed to send email.');
    }
    res.status(200).send('Email sent successfully.');
  });
});

app.listen(4000, () => console.log('Server is running on port 4000'));
