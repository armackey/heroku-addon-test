var express = require('express'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    config = require('./db/db');
    app = express();

mongoose.connect(config.db);
app.use(bodyParser.json());

app.use(express.static('client'));
app.listen(3000);