'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var MovieSchema = new Schema({
    name: {
        type: String,
        required: '*movie name is required'
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    genre: {
        type: [{
            type: String,
            enum: ['action', 'comedy', 'romance']
        }],
        default: ['action']
    }
});

module.exports = mongoose.model('Movies', MovieSchema);