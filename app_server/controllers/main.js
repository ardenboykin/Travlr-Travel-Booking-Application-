module.exports.index = function(req, res) {
  res.render('index', { title: 'Travlr Getaways' });
};

module.exports.travel = function(req, res) {
  res.render('travel', {
    title: 'Travel',
    trips: [
      { id: 'B0101', name: 'Cancun', length: '4 nights / 5 days', start: 'February 14, 2021', resort: 'Emerald Bay, 3-stars', price: '$799.00' },
      { id: 'B0103', name: 'Barbados', length: '5 nights / 6 days', start: 'February 28, 2021', resort: 'Castaway Cove, 4-stars', price: '$1,299.00' },
      { id: 'B0401', name: 'Panama City', length: '4 nights / 5 days', start: 'Mar 21, 2021', resort: 'Sunseeker Surf, 4-stars', price: '$1,199.00' },
      { id: 'B0701', name: 'Tahiti', length: '6 nights / 7 days', start: 'Mar 28, 2021', resort: 'Hedonist Heaven, 5-stars', price: '$1,799.00' },
      { id: 'B0901', name: 'French Riviera', length: '5 nights / 6 days', start: 'Apr 11, 2021', resort: 'Chateau Royal, 5-stars', price: '$2,499.00' }
    ]
  });
};