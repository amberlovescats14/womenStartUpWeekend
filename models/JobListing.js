const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/*
  schoolDistrict
  schoolName
  subject
  school url
*/

const JobListingSchema = new Schema({
  schoolDistrict: {
    type: String,
    required: true,
    min: 5,
    max: 50
  },
  schoolName: {
    type: String,
    required: true,
    min: 5,
    max: 50
  },
  subject: {
    type: String,
    required: true,
    min: 5, 
    max: 20
  },
  schoolURL: {
    type: String,
    required: true,
    min: 7
  }
});

module.exports = JobListing = mongoose.model('Job', JobListingSchema);