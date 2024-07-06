const express = require("express");
const cors = require("cors");
const referralRoutes = require("./routes/referralRoutes");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/referrals", referralRoutes);
app.get("/", (req, res) => {
  res.send("Welcome to the Referrals API");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Internal server error" });
});
