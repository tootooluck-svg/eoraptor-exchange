const express = require('express');
const router = express.Router();
const Banner = require('../models/Banner');
const auth = require('../middleware/auth');
const multer = require('multer');
const path = require('path');

// Multer config
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname))
});
const upload = multer({ storage });

// Get all banners
router.get('/', async (req, res) => {
  try {
    const banners = await Banner.find({ isActive: true }).sort('order');
    res.json(banners);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Create banner (admin only)
router.post('/', auth, upload.single('image'), async (req, res) => {
  try {
    const banner = new Banner({
      ...req.body,
      image: req.file ? `/uploads/${req.file.filename}` : req.body.image
    });
    await banner.save();
    res.status(201).json(banner);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Update banner (admin only)
router.put('/:id', auth, upload.single('image'), async (req, res) => {
  try {
    const updateData = { ...req.body };
    if (req.file) updateData.image = `/uploads/${req.file.filename}`;
    
    const banner = await Banner.findByIdAndUpdate(req.params.id, updateData, { new: true });
    res.json(banner);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete banner (admin only)
router.delete('/:id', auth, async (req, res) => {
  try {
    await Banner.findByIdAndDelete(req.params.id);
    res.json({ message: 'Banner deleted' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
