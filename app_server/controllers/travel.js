// Use Node's built-in filesystem module to read the JSON data file
var fs = require('fs');
// Read and parse the trips JSON file synchronously on each request
var trips = JSON.parse(fs.readFileSync('./data/trips.json', 'utf8'));

/* GET travel view */
// Pass the trips data array to the travel template for rendering
const travel = (req, res) => {
  res.render('travel', { title: 'Travlr Getaways', trips });
};

module.exports = {
  travel
};