var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    Movie = require('./api/movies/models'), //created model loading here
    bodyParser = require('body-parser');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/moviesDB');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var router = require('./api/movies/urls'); //importing route
router(app); //register the route


app.listen(port);


console.log('movies list RESTful API server started on: ' + port);
