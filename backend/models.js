// backend/models.js
const mongoose = require('mongoose');

// Define user preference schema
const preferenceSchema = new mongoose.Schema({
  fuelEfficiency: { type: Number, required: true },
  space: { type: Number, required: true },
  reliability: { type: Number, required: true },
  performance: { type: Number, required: true },
    price: { type: Number, required: true },
    engineType: { type: String, required: true },
    transmission: { type: String, required: true },
    drive: { type: String, required: true },
    numberSeats: { type: Number, required: true },

});

// Define recommendation schema
const recommendationSchema = new mongoose.Schema({
  make: { type: String, required: true },
  model: { type: String, required: true },
  year: { type: Number, required: true },
});

// Create models
const Preference = mongoose.model('Preference', preferenceSchema);
const Recommendation = mongoose.model('Recommendation', recommendationSchema);

module.exports = { Preference, Recommendation };
