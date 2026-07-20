/* GET travel view */
// Render the travel view and pass the page title for HBS to inject
const travel = (req, res) => {
  res.render('travel', { title: "Travlr Getaways"});
};

module.exports = {
  travel
};