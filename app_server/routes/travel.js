var express = require('express');
var router = express.Router();
// Import the travel controller to handle travel page requests
var controller = require('../controllers/travel');

/* GET travel page. */
// Route requests to the travel function in the travel controller
router.get('/', controller.travel);

module.exports = router;