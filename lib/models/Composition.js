const mongoose = require('mongoose');

const compositionSchema = new mongoose.Schema({
  year: String,
  duration: String,
  difficulty: String,
  publisher: String,
  cost: String
});

module.exports = mongoose.model('Composition', compositionSchema);
