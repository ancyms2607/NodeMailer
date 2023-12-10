var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'ancyann2607@gmail.com',
    pass: 'smuo dlsd aydv epal'
  }
});

var mailOptions = {
  from: 'ancyann2607@gmail.com',
  to: 'ancyms95@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'This is test email!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});