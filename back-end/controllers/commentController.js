const models = require('../models');
const Comment = models.Comment;
const Video = models.Video;

function index(req, res) {
	Video.findById(req.params.video_id, function(err, foundVideo) {
		if (err) res.send('Comment index controller: ', err);
		else {
			let comments = foundVideo.comments
			res.json(comments);
		}
	})
}

function show(req, res) {
	Comment.findById(req.params.comment_id, function(err, showComment) {
		if (err) res.send('Comment show controller: ', err);
		res.json(showComment);
	})
}

function create(req, res) {
	Comment.create(req.body, function(err, commentSuccess) {
		if (err) res.send('Comment create controller: ', err);
		else {
			Video.findById(req.params.video_id, function(err, videoSuccess) {
				if (err) res.send('Comment create controller: ', err);
				else {
					videoSuccess.comments.push(commentSuccess);
					videoSuccess.save();
					res.json(videoSuccess);
				}
			})
		}
	});
}