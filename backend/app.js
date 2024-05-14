// backend/app.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000; // Change 3000 to your desired port


// Middleware
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('Welcome to CarFinder API');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
