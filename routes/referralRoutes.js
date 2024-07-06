const express = require('express');
const router = express.Router();
const { sendReferralEmail } = require('../controllers/referralController');

// POST /api/referral route
router.post('/referral', async (req, res) => {
  try {
    // Assume req.body contains the form data
    const formData = req.body;

    // Send email
    await sendReferralEmail(formData);

    // Respond with success message
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error processing referral:', error);
    res.status(500).json({ error: 'Failed to process referral' });
  }
});

module.exports = router;
