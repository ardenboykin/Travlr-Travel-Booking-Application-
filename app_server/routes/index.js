var express = require('express');
var router = express.Router();
// Import the main controller to handle home page requests
const ctrlMain = require('../controllers/main');

/* GET home page. */
// Route root requests to the index function in the main controller
router.get('/', ctrlMain.index);

module.exports = router;