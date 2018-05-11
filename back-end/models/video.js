const mongoose = require('mongoose');
  Schema = mongoose.Schema,
  Comment = require('./comment.js');

const VideoSchema = new Schema({
	title: String, 
	category: String,
	artist: String, 
	votes: Number,
	videoUrl: String, 
	videoDesc: String, 
	videoThumbnail: String,
	comments: [Comment.schema]
})

const Video = mongoose.model('Video', VideoSchema);

module.exports = Video;