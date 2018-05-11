const models = require('../models');


// Comment Data
const commentsData = [{
	name: 'jacob',
	comments: 'nice video'
}, {
	name: 'rose',
	comments: 'nice music'
}, {
	name: 'marcus',
	comments: 'nice movie'
}]


// Recommendation Data
const recommendationsData = [{
	name: 'David Bowie',
	recommendations: 'I want more dubsteb'
}, {
	name: 'Aphextwin 1', 
	recommendations: 'I want more spaghetti'
}]


// Video Data
const videosData = [{
	title: 'PYNK',
	category: 'music',
	artist: 'Armin',
	votes: 5,
	videoUrl: 'https://www.youtube.com/embed/mfJC34tOZms',
	videoDesc: 'blah blah',
	videoThumbnail: 'blah', 
	comments: [commentsData[0]]
}, {
	title: 'This is America',
	category: 'music',
	artist: 'Armin',
	votes: 12,
	videoUrl: 'https://www.youtube.com/embed/mfJC34tOZms',
	videoDesc: 'blah blah',
	videoThumbnail: 'blah', 
	comments: [commentsData[2]]
}, {
	title: 'Mirage',
	category: 'music',
	artist: 'Armin',
	votes: 2,
	videoUrl: 'https://www.youtube.com/embed/mfJC34tOZms',
	videoDesc: 'blah blah',
	videoThumbnail: 'blah', 
	comments: [commentsData[1]]
}]



models.Recommendation.remove({}, function(err, res) {
	if (err) {
		console.log('Error removing Recommendation: ', err);
		return;
	} 
	console.log('Removing all Recommendation');

	models.Recommendation.create(recommendationsData, function(err, recmds) {
		if (err) {
			console.log('Error creating Recommendation ', err);
			return; 
		}
		console.log('Created ', recmds.length, ' Recommendation');
		return;
	})
})

models.Comment.remove({}, function(err, res) {
	if (err) {
		console.log('Error removing comments: ', err);
		return; 
	}
	console.log('Remove all Comments');

	models.Comment.create(commentsData, function(err, comments) {
		if (err) {
			console.log('Error creating Comments:' , err);
			return;
		}

		console.log('Created ', comments.length, 'comments');

		models.Video.remove({}, function(err, res) {
			if (err) {
				console.log('Error removing videos: ', err);
				return;
			}
			console.log('Remove all Videos'); 

			models.Video.create(videosData, function(err, videos) {
				if (err) {
					console.log('Error creating Videos ', err);
					return;
				}
				console.log('Created ', videos.length, 'videos');
				return;
			})
		})
	})
})