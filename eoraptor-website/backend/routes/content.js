const express = require('express');
const router = express.Router();
const Content = require('../models/Content');
const auth = require('../middleware/auth');

// Get all content
router.get('/', async (req, res) => {
  try {
    const contents = await Content.find();
    res.json(contents);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get content by key
router.get('/:key', async (req, res) => {
  try {
    const content = await Content.findOne({ key: req.params.key });
    if (!content) return res.status(404).json({ error: 'Content not found' });
    res.json(content);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update content (admin only)
router.put('/:key', auth, async (req, res) => {
  try {
    const content = await Content.findOneAndUpdate(
      { key: req.params.key },
      req.body,
      { new: true, upsert: true }
    );
    res.json(content);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
