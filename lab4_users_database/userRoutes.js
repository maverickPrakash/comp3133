const express = require('express');
const User = require('./userModel');

const router = express.Router();

// POST API to insert document to MongoDB database with validation
router.post('/', async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json({ message: 'User created successfully', user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
