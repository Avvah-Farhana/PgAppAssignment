var express = require('express');
var app = express();
var mongoose = require('mongoose');

var bodyParser = require('body-parser');
 var multer = require('multer');

 mongoose.Promise = global.Promise;
 mongoose.connect("mongodb://localhost:27017/PgApp");
//  mongoose.connect(config.mongo.url, config.mongo.options);

 app.use(function(req, res, next) { //allow cross origin requests
        res.setHeader("Access-Control-Allow-Methods", "POST, PUT, OPTIONS, DELETE, GET");
        res.header("Access-Control-Allow-Origin", "http://localhost:3000");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.header("Access-Control-Allow-Credentials", true);
        next();
    });


    // Our first route
    app.get('/', function (req, res) {
        res.send('Hello Dev!');
    });


        // Listen to port 8000
        app.listen(8000, function () {
            console.log('Dev app listening on port 8000!');
        });

        app.use(bodyParser.urlencoded({
            extended: true
        }));
        app.use(bodyParser.json());

        require('./routes')(app);

        //Expose app
var exports = module.exports = app;
    