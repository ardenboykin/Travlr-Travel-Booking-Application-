const express = require('express'); // Express app
const router = express.Router();    // Router logic

// This is where we import the controllers we will route
const tripsController = require('../controllers/trips');

// /trips - GET all, POST new
router
  .route('/trips')
  .get(tripsController.tripsList)
  .post(tripsController.tripsAddTrip);

// /trips/:tripCode - GET one, PUT update, DELETE remove
router
  .route('/trips/:tripCode')
  .get(tripsController.tripsFindByCode)
  .put(tripsController.tripsUpdateTrip)
  .delete(tripsController.tripsDeleteTrip);

module.exports = router;