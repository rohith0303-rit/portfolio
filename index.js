const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/projects', require('./routes/projects'));

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/portfolio';

// MongoDB Connection
mongoose.connect(MONGO_URI)
  .then(() => console.log('MongoDB Connected Successfully'))
  .catch((err) => console.log('MongoDB Connection Error: ', err));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});