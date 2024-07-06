const nodemailer = require('nodemailer');

// Create a transporter with SMTP configuration
const transporter = nodemailer.createTransport({
  host: 'smtp.yourmailserver.com',
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: 'your-email@example.com',
    pass: 'your-email-password',
  },
});

// Function to send referral email
const sendReferralEmail = async (formData) => {
  try {
    const info = await transporter.sendMail({
      from: 'your-email@example.com',
      to: 'recipient@example.com', // Replace with the recipient's email address
      subject: 'New Referral Form Submission',
      html: `
        <p>Hello,</p>
        <p>A new referral form has been submitted:</p>
        <ul>
          <li>Name: ${formData.yourName}</li>
          <li>Email: ${formData.yourEmail}</li>
          <li>Phone Number: ${formData.yourPhone}</li>
          <li>Referee Name: ${formData.refereeName}</li>
          <li>Referee Email: ${formData.refereeEmail}</li>
          <li>Referee Phone Number: ${formData.refereePhone}</li>
          <li>Course Interested In: ${formData.courseInterested}</li>
        </ul>
      `,
    });
    console.log('Email sent:', info.response);
  } catch (error) {
    console.error('Error sending email:', error);
    throw error; // Propagate the error back to the caller
  }
};

module.exports = { sendReferralEmail };
