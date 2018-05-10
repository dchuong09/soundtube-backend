const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');
const videoController = require('../controllers/videoController');
const recommendationController = require('../controllers/recommendationController');

// Video Routes
router.get('/api/videos', videoController.index);
router.get('/api/videos/:video_id', videoController.show);

// Comment Routers 
router.get('/api/videos/:video_id/comments', commentController.index);
router.post('/api/videos/:video_id/comments', commentController.create);
router.delete('/api/videos/:video_id/comments/:comment_id', commentController.destroy);

// Recommendation Routes 
router.get('/api/recommendations', recommendationController.index);
router.post('/api/recommendations', recommendationController.create);

module.exports = router;
