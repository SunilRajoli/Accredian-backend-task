const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const createReferral = async (req, res, next) => {
  try {
    const { yourName, yourEmail, yourPhone, refereeName, refereeEmail, refereePhone, courseInterested } = req.body;

    const referral = await prisma.referral.create({
      data: { yourName, yourEmail, yourPhone, refereeName, refereeEmail, refereePhone, courseInterested }
    });

    res.status(201).json(referral);
  } catch (error) {
    next(error); // Pass error to error handler middleware
  }
};

module.exports = { createReferral };
