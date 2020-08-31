'use strict';
module.exports = function (app) {
    var movies = require('./movies');

    app.route('/movies')
        .get(movies.list)
        .post(movies.create);
};

