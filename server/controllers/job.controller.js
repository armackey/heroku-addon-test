var Jobs = require('../models/job.model');

// find all jobs in database
exports.getJobs = function (req, res) {
  Jobs.find({}, function(err, jobs) {
    if (err) 
      throw err;
    if (jobs.length < 1) {
      res.send({message: 'There are none! Why not create one?'});
    } else {
      res.send(jobs);
    }
  });
};

// post a job
exports.postJob = function (req, res) {
  // creates an instance and stores it
  var newJob = new Jobs(req.body);
  newJob.save(function(){
    // sends back to client
    res.send(newJob);
  });
};

// delete a job
exports.removeJob = function (req, res) {
  Jobs.findByIdAndRemove(req.params.id, function (err, job) {
    if (err)
      throw err;
    res.send({message: 'job has been removed'});
  });
};

// update a job
exports.updateJob = function (req, res) {

};