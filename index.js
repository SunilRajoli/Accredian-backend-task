const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const referralRoutes = require('./routes/referralRoutes');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

app.use(cors());

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api', referralRoutes); // Assuming referral routes are under /api

// Error handler middleware
app.use(errorHandler);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
