const Profile = require('../models/profile');
const Skill = require('../models/skill');

async function index(req, res, next) {
  const profiles = await Profile.find({});
  const skills = await Skill.find({});

  res.render('index', {
    title: 'My CV of group Starbuck',
    page: req.url,
    profile: profiles[0],
    skill: skills[0],
  });
}
module.exports = { index };
