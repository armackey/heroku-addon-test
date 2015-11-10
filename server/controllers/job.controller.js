var Jobs = require('../models/job.model');

// find all jobs in database
exports.getJobs = function(req, res) {
  Jobs.find({}, function(err, jobs) {
    if (err) 
      throw err;
    // condition to inform user that there aren't any jobs else send we send them
    if (jobs.length < 1) {
      res.send({message: 'There are none! Why not create one?'});
    } else {
      res.send(jobs);
    }
  });
};

// post a job
exports.postJob = function(req, res) {
  // creates an instance and stores it
  var newJob = new Jobs({
    task: req.body.task,
    dynos: req.body.dynos,
    frequency: req.body.frequency,
    lastRun: req.body.lastRun,
    nextRun: req.body.nextRun
  });
  console.log(newJob);
  newJob.save(function(){
    console.log('post it');
    // sends back to client
    res.send(newJob);
  });
};

// delete a job
exports.removeJob = function(req, res, next) {
  Jobs.findByIdAndRemove(req.params.id, function (err, job) {
    if (err)
      throw err;
    res.send({message: 'job has been removed'});
    next();
  });
};

// update a job
exports.updateJob = function(req, res) {
  Jobs.findById(req.params.id, function(err, job) {
    if (err)
      throw err;
    // available options to update
    job.task = req.body.task;
    job.dynos = req.body.dynos;
    job.frequency = req.body.frequency;
    // stores our updated object
    job.save(function (err) {
      if (err)
        throw err;
      res.send(job);
    });
  });
};






