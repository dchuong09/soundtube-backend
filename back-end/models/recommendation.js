const mongoose = require('mongoose');
  Schema = mongoose.Schema;

const RecommendationSchema = new Schema({
	name: String,
	recommendations: String
})

const Recommendation = mongoose.model('Recommendation', RecommendationSchema);

module.exports = Recommendation;