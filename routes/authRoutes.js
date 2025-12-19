const express = require('express');
const router = express.Router();
const { signup, signin, logout } = require('../controllers/authController');

// Render register page
router.get('/register', (req, res) => {
  res.render('register', { error: null });
});

// Register user
router.post('/register', signup);

// Render login page
router.get('/login', (req, res) => {
  res.render('login', { error: null });
});

// Login user
router.post('/login', signin);

// Logout user
router.get('/logout', logout);

module.exports = router;
