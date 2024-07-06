const nodemailer = require("nodemailer");

const sendReferralEmail = async (referrerName, refereeEmail, courseName) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "your-email@gmail.com",
      pass: "your-email-password",
    },
  });

  const mailOptions = {
    from: "your-email@gmail.com",
    to: refereeEmail,
    subject: "Referral Notification",
    text: `You have been referred to the course: ${courseName} by ${referrerName}`,
  };

  await transporter.sendMail(mailOptions);
};

module.exports = { sendReferralEmail };
