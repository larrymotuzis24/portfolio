const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const { google } = require('googleapis');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

const CLIENT_ID = '858898823369-4ucnb1hic05gubda0cbka53ifd09jomo.apps.googleusercontent.com';
const CLIENT_SECRET = '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';
const REDIRECT_URI = '"https://www.googleapis.com/auth/gmail.send"';
const REFRESH_TOKEN = '1//04tcJYFp59QPyCgYIARAAGAQSNwF-L9Irp1Im0YZ0vBPA_7fDDHU8t93P45ppHaObBKPOZO9C6yPlRX1ALML0tAJ-X_oVlhTFCyY';

const oAuth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
);

oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

app.post('/send-email', async (req, res) => {
  const { name, email, subject, message } = req.body;

  try {
    const accessToken = await oAuth2Client.getAccessToken();

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: 'larrymotuzis@gmail.com',
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken: accessToken,
      },
    });

    const mailOptions = {
      from: email,
      to: 'larrymotuzis@gmail.com',
      subject: `Portfolio Contact: ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).send('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send('Error sending email');
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
