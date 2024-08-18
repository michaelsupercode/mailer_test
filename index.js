var nodemailer = require('nodemailer');
var connection = 'smtps://';
var transporter = nodemailer.createTransport(connection);

var mailOptions = {
    from: '<>',
    to: '',
    subject: '',
    text: ''
};

transporter.sendMail(mailOptions, function(err, info) {
    if (err) throw err;
    console.log('Message sent: ' + info.response);
});
