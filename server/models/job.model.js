var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var JobSchema = new Schema({
  task: {type: String},
  dynos: {type: String},
  frequency: {type: String},
  lastRun: {type: String},
  nextRun: {type: String},
  date: {type: Date, default: new Date()}
});

module.exports = mongoose.model('Job', JobSchema);