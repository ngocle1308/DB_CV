const Profile = require('../models/profile');

async function index(req, res, next) {
  const profiles = await Profile.find({});
  res.render('index', { title: 'My CV of group Starbuck', page: req.url, profile: profiles[0] });
}
module.exports = { index };
