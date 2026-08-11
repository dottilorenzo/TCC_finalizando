// routes/authRoutes.js
const express = require('express');
const router = express.Router();
const AuthController = require('../controllers/AuthController');

// Rotas públicas (não precisam de login)
router.post('/register', AuthController.register);
router.post('/login', AuthController.login);

module.exports = router;