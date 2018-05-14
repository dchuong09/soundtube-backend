const models = require('../models');


// Comment Data
const commentsData = [{
	name: 'CastriX',
	comments: "I'm getting motivation to make my own songs...﻿"
}, {
	name: 'Arctic Empire',
	comments: 'Illenium is love <3﻿'
}]


// Recommendation Data
const recommendationsData = [{
	name: 'David Bowie',
	recommendations: 'I want more dubsteb!!!'
}, {
	name: 'Aphextwin 1', 
	recommendations: "I would love to see more coding tutorials"
}]


// Video Data
const videosData = [{
	title: 'Fractures (feat. Nevve)',
	category: 'music',
	artist: 'Illenium',
	votes: 0,
	videoUrl: 'https://www.youtube.com/embed/ZCu2gwLj9ok',
	comments: [commentsData[0], commentsData[1]]
}, {
	title: 'There For You (Official Video)',
	category: 'music',
	artist: 'Martin Garrix & Troye Sivan',
	votes: 0,
	videoUrl: 'https://www.youtube.com/embed/pNNMr5glICM',
	comments: []
}, {
	title: 'Where Are Ü Now',
	category: 'music',
	artist: 'Skrillex and Diplo',
	votes: 0,
	videoUrl: 'https://www.youtube.com/embed/nntGTK2Fhb0',
	comments: []
}, {
	title: 'Gassed Up',
	category: 'music',
	artist: 'Jauz & DJ Snake',
	votes: 0,
	videoUrl: 'https://www.youtube.com/embed/8wh0sZFZNoI',
	comments: []
}, {
	title: 'BOOM (Official Video)',
	category: 'music',
	artist: 'Tiësto & Sevenn',
	votes: 0,
	videoUrl: 'https://www.youtube.com/embed/tSJSVmfaMCs',
	comments: []
}, {
	title: 'Church',
	category: 'music',
	artist: 'Alison Wonderland',
	votes: 0,
	videoUrl: 'https://www.youtube.com/embed/GJlGYmPAV3Q', 
	comments: []
}, {
	title: 'Call Out My Name',
	category: 'music',
	artist: 'The Weeknd',
	votes: 0,
	videoUrl: 'https://www.youtube.com/embed/M4ZoCHID9GI',
	comments: []
}, {
	title: ' "Adieu" OFFICIAL VERSION',
	category: 'music',
	artist: 'Tchami',
	votes: 0,
	videoUrl: 'https://www.youtube.com/embed/kr0_YzOQf5A',
	comments: []
}, {
	title: 'Thief [Official Music Video]',
	category: 'music',
	artist: 'Ookay',
	votes: 0,
	videoUrl: 'https://www.youtube.com/embed/knnf2Aw6kMU',
	comments: []
}, {
	title: 'Wake Me Up',
	category: 'music',
	artist: 'Avicii',
	votes: 0,
	videoUrl: 'https://www.youtube.com/embed/Iq6gCapM9gk',
	comments: []
}, {
	title: 'Feel Good [Official Lyric Video]',
	category: 'music',
	artist: 'Gryffin & Illenium ft. Daya',
	votes: 0,
	videoUrl: 'https://www.youtube.com/embed/-AfjBifqK_E',
	comments: []
}, {
	title: 'No Money',
	category: 'music',
	artist: 'Galantis',
	votes: 0,
	videoUrl: 'https://www.youtube.com/embed/a52Ul2AM92c',
	comments: []
}, {
	title: 'Till It Hurts ',
	category: 'music',
	artist: 'Yellow Claw',
	votes: 0,
	videoUrl: 'https://www.youtube.com/embed/0tHH0BNH0Sc',
	comments: []
}, {
	title: 'More Than You Know',
	category: 'music',
	artist: 'Axwell Λ Ingrosso',
	votes: 0,
	videoUrl: 'https://www.youtube.com/embed/GsF05B8TFWg',
	comments: []
}, {
	title: "Don't You Worry Child",
	category: 'music',
	artist: 'Swedish House Mafia',
	votes: 0,
	videoUrl: 'https://www.youtube.com/embed/1y6smkh6c-0',
	comments: []
}, {
	title: 'Calling (Lose My Mind)',
	category: 'music',
	artist: 'Sebastian Ingrosso, Alesso',
	votes: 0,
	videoUrl: 'https://www.youtube.com/embed/9G1I16gJBvU',
	comments: []
}, {
	title: 'Never Be Like You',
	category: 'music',
	artist: 'Flume',
	votes: 0,
	videoUrl: 'https://www.youtube.com/embed/Ly7uj0JwgKg',
	comments: []
}, {
	title: 'You and Me (Flume Remix)',
	category: 'music',
	artist: 'Disclosure',
	votes: 0,
	videoUrl: 'https://www.youtube.com/embed/tkAKj-L8ono',
	comments: []
}, {
	title: 'Middle ft. Bipolar Sunshine',
	category: 'music',
	artist: 'DJ Snake',
	votes: 0,
	videoUrl: 'https://www.youtube.com/embed/mOKqNxN4jW',
	comments: []
}, {
	title: 'Firestone (Official Video)',
	category: 'music',
	artist: 'Kygo',
	votes: 0,
	videoUrl: 'https://www.youtube.com/embed/9Sc-ir2UwGU',
	comments: []
}, {
	title: "The Ultimate Beginner's Guide to 3D Printing", 
	category: "tutorial",
	artist: "3D Now",
	votes: 0,
	videoUrl: "https://www.youtube.com/embed/3LBTkLsjHGQ",
	comments: []
},
	{
	title: "Make a Cheap LASER LIGHTER! - Awesome Lighter Hack!!! (Burning Laser Lighter)", 
	category: "tutorial",
	artist: "JLaserVideo",
	votes: 0,
	videoUrl: "https://www.youtube.com/embed/h-7GWVJCHqs",
	comments: []
},
	{
	title: "Python Tutorial for Absolute Beginners #1 - What Are Variables?", 
	category: "tutorial",
	artist: "CS Dojo",
	votes: 0,
	videoUrl: "https://www.youtube.com/embed/Z1Yd7upQsXY",
	comments: []
},
{
	title: "GraphQL Basics - Fun Fun Function", 
	category: "tutorial",
	artist: "Fun Fun Function",
	votes: 0,
	videoUrl: "https://www.youtube.com/embed/lAJWHHUz8_8",
	comments: []
}, 
{
	title: "How To Make WebGL Animations", 
	category: "tutorial",
	artist: "Creators",
	votes: 0,
	videoUrl: "https://www.youtube.com/embed/7yk1bWT8ulA",
	comments: []	
},
{
	title: "THREE.js Part 1: Intro", 
	category: "tutorial",
	artist: "CJ Gammon",
	votes: 0,
	videoUrl: "https://www.youtube.com/embed/ABV1mK1CGOY",
	comments: []
},
{
	title: "You can learn Arduino in 15 minutes", 
	category: "tutorial",
	artist: "Afrotechmods",
	votes: 0,
	videoUrl: "https://www.youtube.com/embed/nL34zDTPkcs",
	comments: []	
},
{
	title: "Javascript Tutorial - Programming Tutorial for Beginners Pt 1", 
	category: "tutorial",
	artist: "LearnCode.Academy",
	votes: 0,
	videoUrl: "https://www.youtube.com/embed/vZBCTc9zHtI",
	comments: []	
},
{
	title: "Let's Learn Ruby on Codecademy - Episode 1 - Introduction to Ruby", 
	category: "tutorial",
	artist: "Dan Fletcher",
	votes: 0,
	videoUrl: "https://www.youtube.com/embed/AuRpTHsNC-8",
	comments: []
},
{
	title: "CSS Crash Course For Absolute Beginners", 
	category: "tutorial",
	artist: "Traversy Media",
	votes: 0,
	videoUrl: "https://www.youtube.com/embed/yfoY53QXEnI",
	comments: []	
},
{
	title: "HTML Crash Course For Absolute Beginners", 
	category: "tutorial",
	artist: "Traversy Media",
	votes: 0,
	videoUrl: "https://www.youtube.com/embed/UB1O30fR-EE",
	comments: []	
},
{
	title: "Tutorial: Learn how to use CSS Media Queries in less than 5 minutes", 
	category: "tutorial",
	artist: "Kevin Powell",
	votes: 0,
	videoUrl: "https://www.youtube.com/embed/2KL-z9A56SQ",
	comments: []	 
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