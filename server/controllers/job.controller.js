var Jobs = require('../models/job.model');

// find all jobs in database
exports.gettJobs = function (req, res) {
  Jobs.find({}, function(err, jobs) {
    if (err) 
      throw err;
    res.send(jobs);
  });
};

// post a job
exports.postJob = function (req, res) {
  var newJob = new Job(req.body);
  newJob.save(function(){
    console.log(req.body);
    res.send(newJob);
  });
};

// delete a job
exports.removeJob = function (req, res) {

};

exports.updateJob = function (req, res) {

};