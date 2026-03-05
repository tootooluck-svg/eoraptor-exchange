const mongoose = require('mongoose');

const contentSchema = new mongoose.Schema({
  key: { type: String, required: true, unique: true },
  valueZh: { type: String, required: true },
  valueEn: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Content', contentSchema);
