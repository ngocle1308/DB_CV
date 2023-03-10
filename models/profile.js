const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
  avatar: { type: String },
  name: { type: String },
  job: { type: String },
  address: { type: String },
});

const ProfileModel = mongoose.model('Profile', ProfileSchema);
module.exports = ProfileModel;
