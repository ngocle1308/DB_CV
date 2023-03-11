const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SkillSchema = new Schema({
  coreSkills: { type: Array },
  otherSkills: { type: Array },
});

const SkillModel = mongoose.model('Skill', SkillSchema);
module.exports = SkillModel;
