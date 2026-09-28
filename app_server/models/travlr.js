const mongoose = require('mongoose');

// Define the trip schema with all required fields
const tripSchema = new mongoose.Schema({
  // code and name are indexed for faster lookups in MongoDB
  code: { type: String, required: true, index: true },
  name: { type: String, required: true, index: true },
  length: { type: String, required: true },
  // start date stored in ISO standard date format
  start: { type: Date, required: true },
  resort: { type: String, required: true },
  perPerson: { type: String, required: true },
  image: { type: String, required: true },
  description: { type: String, required: true }
});

// Register the model with MongoDB as the 'trips' collection
const Trip = mongoose.model('trips', tripSchema);
module.exports = Trip;