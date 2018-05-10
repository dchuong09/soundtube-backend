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

module.exports.index = index;
module.exports.show = show;