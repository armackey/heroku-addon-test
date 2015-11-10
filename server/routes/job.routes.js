var express = require('express'),
    router = express.Router(),
    jobCtrl = require('../controllers/job.controller');


router.post('/postJob', jobCtrl.postJob);
router.get('/getJobs', jobCtrl.getJobs);
router.put('/updateJob', jobCtrl.updateJob);
router.delete('/removeJob/:id', jobCtrl.removeJob);

module.exports = router;