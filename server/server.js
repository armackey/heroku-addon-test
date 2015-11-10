var express = require('express'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    config = require('./db/db');
    app = express();

// connects to db
mongoose.connect(config.db);
// serves all files found inside client directory
app.use(express.static('client'));
// parses/decodes what we send to the server
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// our restful routes
app.use(require('./routes/job.routes'));

app.listen(3000);