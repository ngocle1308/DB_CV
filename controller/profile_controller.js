const Profile = require('../models/profile');

async function index(req, res, next) {
  const profiles = await Profile.find({});
  res.render('components/about', {
    title: 'My CV of group Starbuck | About',
    page: req.url,
    profile: profiles[0],
  });
}
module.exports = { index };
