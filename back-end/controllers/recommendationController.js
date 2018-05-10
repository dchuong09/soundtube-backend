const models = require('../models');
const Recommendation = models.Recommendation;

function index(req, res) {
	Recommendation.find({}, function(err, foundRecs) {
		if (err) res.send('Recommendation index controller: ', err);
		res.json(foundRecs);
	})
}

function show(req, res) {
	Recommendation.findById(req.params.recmd_id, function(err, foundRec) {
		if (err) res.send('Recommendation show controller: ', err);
		res.json(foundRec);
	})
}

function create(req, res) {
	Recommendation.create(req.body, function(err, newRec) {
		if (err) res.send('Recommendation create controller: ', err);
		res.json(newRec);
	})
}

module.exports = {
	index: index,
	show: show,
	create: create
}

