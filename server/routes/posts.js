const express = require('express');
const { 
    createPost, 
    getPosts, 
    getPostBySlug
} = require('../controllers/postController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.route('/')
    .get(getPosts)
    .post(protect, createPost);

router.route('/:slug').get(getPostBySlug);

module.exports = router;