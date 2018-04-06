
module.exports = function(){

    var mongoose = require('mongoose'); // Not require('mongoose').Schema (because you need schema and model)
    var db = require('../lib/connect_db')();
    var Task = mongoose.Schema({  // Call Schema from mongoose
        title: String,
        description: String,
        status: Boolean
    });
    
    return mongoose.model('tasks',Task);  // Call model from mongoose

}