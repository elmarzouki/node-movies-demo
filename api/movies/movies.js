'use strict';


var mongoose = require('mongoose'),
    Movie = mongoose.model('Movies');

exports.list = function (req, res) {
    Movie.find({}, function (err, movie) {
        if (err)
            res.send(err);
        res.json(movie);
    });
};

exports.create = function (req, res) {
    var new_movie = new Movie(req.body);
    new_movie.save(function (err, movie) {
        if (err)
            res.send(err);
        res.json(movie);
    });
};