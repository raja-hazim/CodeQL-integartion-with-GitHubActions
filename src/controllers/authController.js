const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/userModel');
const router = express.Router();
router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }
    // Generate and send secure token
    res.json({ token: 'your-secure-token' }); // Placeholder for secure token generation
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});
module.exports = router;
