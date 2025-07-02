const Post = require('../models/Post');

exports.createPost = async (req, res) => {
  try {
    const { title, content, category } = req.body;
    const author = req.user.id;

    const post = await Post.create({
      title,
      content,
      category,
      author,
    });

    res.status(201).json({ success: true, data: post });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
};

exports.getPosts = async (req, res) => {
  try {
    const posts = await Post.find()
      .populate('author', 'username')
      .populate('category', 'name')
      .sort({ createdAt: -1 });
      
    res.status(200).json({ success: true, data: posts });
  } catch (err) {
    res.status(500).json({ success: false, error: 'Server Error' });
  }
};

exports.getPostBySlug = async (req, res) => {
    try {
      const post = await Post.findOne({ slug: req.params.slug })
        .populate('author', 'username')
        .populate('category', 'name');
  
      if (!post) {
        return res.status(404).json({ success: false, error: 'Post not found' });
      }
      
      res.status(200).json({ success: true, data: post });
    } catch (err) {
      res.status(500).json({ success: false, error: 'Server Error' });
    }
  };