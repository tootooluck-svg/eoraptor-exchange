const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');
const auth = require('../middleware/auth');
const multer = require('multer');

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/docs/'),
  filename: (req, file, cb) => cb(null, file.originalname)
});
const upload = multer({ storage });

// List all docs
router.get('/', (req, res) => {
  const docsDir = path.join(__dirname, '../uploads/docs');
  if (!fs.existsSync(docsDir)) return res.json([]);
  
  const files = fs.readdirSync(docsDir).map(file => ({
    name: file,
    url: `/uploads/docs/${file}`
  }));
  res.json(files);
});

// Upload doc (admin only)
router.post('/', auth, upload.single('doc'), (req, res) => {
  res.json({ message: 'File uploaded', file: req.file.originalname });
});

// Delete doc (admin only)
router.delete('/:filename', auth, (req, res) => {
  const filePath = path.join(__dirname, '../uploads/docs', req.params.filename);
  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);
    res.json({ message: 'File deleted' });
  } else {
    res.status(404).json({ error: 'File not found' });
  }
});

module.exports = router;
