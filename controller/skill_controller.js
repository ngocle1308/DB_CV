const Skill = require('../models/skill');

async function index(req, res, next) {
  const skills = await Skill.find({});
  res.render('components/skills', {
    title: 'My CV of group Starbuck | Skill',
    page: req.url,
    skill: skills[0],
  });
}
module.exports = { index };
