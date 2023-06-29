const nodemailer = require('nodemailer');

exports.handler = async (event, context) => {
  const { name, email, message } = JSON.parse(event.body);
    console.log(email)
  // Create a transporter using your SMTP credentials
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'larrymotuzis@gmail.com',
      pass: 'Krepsinis@12!',
    },
  });

  // Prepare the email message
  const mailOptions = {
    from: {email},
    to: 'larrymotuzis@gmail.com', // Your email address to receive the form data
    subject: 'New form submission',
    text: `
      Name: ${name}
      Email: ${email}
      Message: ${message}
    `,
  };

  try {
    // Send the email
    await transporter.sendMail(mailOptions);

    return {
      statusCode: 200,
      body: 'Email sent successfully',
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: 'Error sending email',
    };
  }
};
