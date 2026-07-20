/* GET Homepage */
// Render the index view and pass the page title for HBS to inject
const index = (req, res) => {
  res.render('index', { title: "Travlr Getaways"});
};

module.exports = {
  index
};