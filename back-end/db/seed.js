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
	title: 'Fractures (feat. Nevve)',
	category: 'music',
	artist: 'Illenium',
	votes: 4,
	videoUrl: 'https://www.youtube.com/embed/ZCu2gwLj9ok',
	videoDesc: 'blah blah',
	videoThumbnail: 'blah', 
	comments: [commentsData[0]]
}, {
	title: 'There For You (Official Video)',
	category: 'music',
	artist: 'Martin Garrix & Troye Sivan',
	votes: 12,
	videoUrl: 'https://www.youtube.com/embed/pNNMr5glICM',
	videoDesc: "'So Far Away' out now on Spotify and Apple Music: http://stmpdrcrds.lnk.to/dlThV",
	videoThumbnail: 'blah', 
	comments: [commentsData[2]]
}, {
	title: 'Where Are Ü Now',
	category: 'music',
	artist: 'Skrillex and Diplo',
	votes: 2,
	videoUrl: 'https://www.youtube.com/embed/nntGTK2Fhb0',
	videoDesc: 'blah blah',
	videoThumbnail: 'blah', 
	comments: [commentsData[1]]
}, {
	title: 'Gassed Up',
	category: 'music',
	artist: 'Jauz & DJ Snake',
	votes: 2,
	videoUrl: 'https://www.youtube.com/embed/8wh0sZFZNoI',
	videoDesc: 'blah blah',
	videoThumbnail: 'blah', 
	comments: [commentsData[1]]
}, {
	title: 'BOOM (Official Video)',
	category: 'music',
	artist: 'Tiësto & Sevenn',
	votes: 2,
	videoUrl: 'https://www.youtube.com/embed/tSJSVmfaMCs',
	videoDesc: 'blah blah',
	videoThumbnail: 'blah', 
	comments: [commentsData[1]]
}, {
	title: 'Church',
	category: 'music',
	artist: 'Alison Wonderland',
	votes: 2,
	videoUrl: 'https://www.youtube.com/embed/GJlGYmPAV3Q',
	videoDesc: 'blah blah',
	videoThumbnail: 'blah', 
	comments: [commentsData[1]]
}, {
	title: 'Call Out My Name',
	category: 'music',
	artist: 'The Weeknd',
	votes: 2,
	videoUrl: 'https://www.youtube.com/embed/M4ZoCHID9GI',
	videoDesc: 'blah blah',
	videoThumbnail: 'blah', 
	comments: [commentsData[1]]
}, {
	title: ' "Adieu" OFFICIAL VERSION',
	category: 'music',
	artist: 'Tchami',
	votes: 2,
	videoUrl: 'https://www.youtube.com/embed/kr0_YzOQf5A',
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