// using SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey('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');
const msg = {
  to: 'oec@pcntv.com',
  from: 'sethkline@pcntv.com',
  subject: 'Test Email',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
};

// sgMail.send(msg);

console.log(sendMessage('test','test','test'));


function sendMessage ( title, date, person )
       return msg = {
            to: 'oec@pcntv.com',
            from: 'sethkline@pcntv.com',
            subject: `New OEC ${title}`,
            text: `from ${person}`
        }
