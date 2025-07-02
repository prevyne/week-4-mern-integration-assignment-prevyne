const express = require('express');
const { createCategory, getCategories } = require('../controllers/categoryController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

router.route('/')
    .get(getCategories)
    .post(protect, createCategory); // Assuming only admins can create

module.exports = router;