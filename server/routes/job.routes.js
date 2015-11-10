var express = require('express'),
    router = express.Router(),
    jobCtrl = require('../controllers/job.controller');

/* our routes for our CRUD app
   ultimately these routes are connected to specific functions
   which allows our users to interact with our app appropriately..

   basically we're gonna use the corresponding routes on our frontend 
   to Create Read Update Delete their data/jobs
 */
router.post('/postJob', jobCtrl.postJob);
router.get('/getJobs', jobCtrl.getJobs);
router.put('/updateJob/:id', jobCtrl.updateJob);
router.delete('/removeJob/:id', jobCtrl.removeJob);

module.exports = router;