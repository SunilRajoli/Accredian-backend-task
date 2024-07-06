const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const createReferral = async (req, res) => {
  const {
    referrerName,
    referrerEmail,
    referrerPhone,
    refereeName,
    refereeEmail,
    courseName,
  } = req.body;

  try {
    const referral = await prisma.referral.create({
      data: {
        referrerName,
        referrerEmail,
        referrerPhone,
        refereeName,
        refereeEmail,
        courseName,
      },
    });
    res.status(201).json(referral);
  } catch (error) {
    console.error("Error creating referral:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = { createReferral };
