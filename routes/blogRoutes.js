const express = require('express');
const router = express.Router();
const { protect, checkAuth } = require('../middlewares/authMiddleware');
const {
  renderCreatePage,
  createBlog,
  renderBlogsPage,
  renderBlogDetailPage
} = require('../controllers/blogController');

// Public routes (with checkAuth to show user info in navbar)
router.get('/', checkAuth, renderBlogsPage);
router.get('/blogs', checkAuth, renderBlogsPage);

// Protected routes (require authentication) - MUST come before :id route
router.get('/blogs/create', protect, renderCreatePage);
router.post('/blogs/create', protect, createBlog);

// Dynamic route - MUST come after specific routes
router.get('/blogs/:id', checkAuth, renderBlogDetailPage);

module.exports = router;
