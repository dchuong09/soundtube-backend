const mongoose = require('mongoose');
  Schema = mongoose.Schema; 

const CommentSchema = new Schema({
	name: String, 
	comment: String
})

const Comment = mongoose.model('Comment', CommentSchema);

module.exports = Comment;