const express = require('express');
const router = express.Router();
const JobListing = require('../models/JobListing');

// GET
router.get('/', async (req, res) => {
  try {
    let jobListings = await JobListing.find();
    res.json(jobListings);
  } catch (error) {
    console.log(error.me);
  }
});

// POST
router.post('/', async (req, res) => {
  try {
    const newJobListing = new jobListings({
      schoolDistrict: req.body.schoolDistrict,
      schoolName: req.body.schoolName,
      subject: req.body.subject,
      schoolURL: req.body.schoolURL
    })
  } catch (error) {
    console.log(error.message);
    res.status(500).json({msg: 'ERROR CREATING JOB LISTING'});
  }
});

// PUT
router.put('/:id', async (req, res) => {
  try {
    const singleJobListing = await JobListing.findById(req.params.id);
    if (!singleJobListing) {
      res.status(404).json({msg: 'NOT FOUND'});
    } else {
      singleJobListing.text = req.body;
      await singleJobListing.save();
      return res(singleJobListing);
    }
  } catch (error) {
    console.log(error.message);
    res.send(500).json({msg: 'UNABLE TO UPDATE USERS'});
  }
});

// DELETE
router.delete('/:id', async (req, res) => {
  try {
    const singleJobListing = await customElements.findById(req.params.id);
    if (!singleJobListing) res.send(404).json({msg: 'USER NOT FOUND'});
    await singleJobListing.remove();
    res.json({msg: 'USER REMOVED'});
  } catch (error) {
    console.log(error.message);
    res.status(500).json({msg: 'UNABLE TO DELETE USER'});
  }
});

module.exports = router;