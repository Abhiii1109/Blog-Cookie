const Blog = require('../models/Blog');

// @desc    Render create blog page
// @route   GET /blogs/create
const renderCreatePage = (req, res) => {
  res.render('createBlog', { user: req.user });
};

// @desc    Create new blog
// @route   POST /blogs/create
const createBlog = async (req, res) => {
  try {
    const { title, content } = req.body;

    // Validation
    if (!title || !content) {
      return res.status(400).render('createBlog', { 
        error: 'Please provide both title and content',
        user: req.user 
      });
    }

    // Create blog
    const blog = await Blog.create({
      title,
      content,
      author: req.user._id
    });

    res.redirect('/blogs');
  } catch (error) {
    console.error('Create blog error:', error.message);
    res.status(500).render('createBlog', { 
      error: 'Something went wrong while creating the blog',
      user: req.user 
    });
  }
};

// @desc    Get all blogs
// @route   GET /blogs
const renderBlogsPage = async (req, res) => {
  try {
    const blogs = await Blog.find()
      .populate('author', 'name')
      .sort({ createdAt: -1 });

    res.render('blogs', { blogs, user: req.user });
  } catch (error) {
    console.error('Get blogs error:', error.message);
    res.status(500).render('blogs', { 
      blogs: [],
      error: 'Something went wrong while fetching blogs',
      user: req.user 
    });
  }
};

// @desc    Get single blog
// @route   GET /blogs/:id
const renderBlogDetailPage = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id)
      .populate('author', 'name');

    if (!blog) {
      return res.status(404).render('blogs', { 
        blogs: [],
        error: 'Blog not found',
        user: req.user 
      });
    }

    res.render('blogDetail', { blog, user: req.user });
  } catch (error) {
    console.error('Get blog error:', error.message);
    res.status(500).render('blogs', { 
      blogs: [],
      error: 'Something went wrong while fetching the blog',
      user: req.user 
    });
  }
};

module.exports = {
  renderCreatePage,
  createBlog,
  renderBlogsPage,
  renderBlogDetailPage
};
