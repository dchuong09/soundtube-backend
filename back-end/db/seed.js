const models = require('../models');

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

const recommendationsData = [{
	name: 'David Bowie',
	recommendations: 'I want more dubsteb'
}, {
	name: 'Aphextwin 1', 
	recommendations: 'I want more spaghetti'
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

			models.Video.create([{
				title: 'PYNK',
				category: 'music',
				videoUrl: 'https://www.youtube.com/watch?v=PaYvlVR_BEc',
				videoDesc: 'blah blah',
				videoThumbnail: 'blah', 
				comments: [comments[0]]
			}, {
				title: 'This is America',
				category: 'music',
				videoUrl: 'https://www.youtube.com/watch?v=VYOjWnS4cMY',
				videoDesc: 'blah blah',
				videoThumbnail: 'blah', 
				comments: [comments[2]]
			}, {
				title: 'Mirage',
				category: 'music',
				videoUrl: 'https://www.youtube.com/watch?v=mfJC34tOZms',
				videoDesc: 'blah blah',
				videoThumbnail: 'blah', 
				comments: [comments[1]]
			}], function(err, videos) {
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