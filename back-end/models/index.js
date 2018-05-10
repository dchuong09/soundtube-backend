const mongoose = require('mongoose');

// Map Global Promise to Resolve Mongo Promise Warning
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/soundtube-mern")
  .then(() => console.log('Mongodb connected...'))
  .catch(err => console.log(err));

module.exports.Video = require('./video');
module.exports.Comment = require('./comment');
module.exports.Recommendation = require('./recommendation');