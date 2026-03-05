const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Admin login
router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  
  // Default admin credentials (should be changed in production)
  const adminUser = {
    username: process.env.ADMIN_USERNAME || 'admin',
    password: process.env.ADMIN_PASSWORD || 'a123456'
  };
  
  if (username !== adminUser.username) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }
  
  const isMatch = password === adminUser.password;
  if (!isMatch) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }
  
  const token = jwt.sign(
    { username: adminUser.username },
    process.env.JWT_SECRET || 'eoraptor-secret',
    { expiresIn: '24h' }
  );
  
  res.json({ token, username: adminUser.username });
});

module.exports = router;
