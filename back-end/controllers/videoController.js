const models = require('../models');
const Video = models.Video;

function index(req, res) {
	Video.find({}, function(err, foundVideos) {
		if(err) res.send('Video index controller: ', err);
		res.json(foundVideos);
	})
}

function show(req, res) {
	Video.findById(req.params.video_id, function(err, foundVideo) {
		if (err) res.send('Video show controller: ', err); 
		res.json(foundVideo);
	})
}

function update(req, res) {
	Video.findByIdAndUpdate(req.params.video_id, {$set: req.body}, function(err, foundVideo) {
		if (err) console.log('Video update controller err: ', err);
		res.json(foundVideo);
	})
}

module.exports = {
	index: index, 
	show: show,
	update: update
}