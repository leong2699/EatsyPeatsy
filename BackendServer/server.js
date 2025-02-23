const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const authRoutes = require("./routes/authRoutes");
const verifyToken = require('./middleware/auth');

const app = express();
const PORT = 5000;

// Load environment variables early
dotenv.config();

// Middleware setup
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:8081', // Replace with your React app's URL
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(err => console.error('MongoDB connection error:', err));

// Use AuthRoutes for handling requests to /api/users
app.use('/api/auth', authRoutes);
app.get('/api/auth/verify', verifyToken, (req, res) => {
  res.json({ user: req.user });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});