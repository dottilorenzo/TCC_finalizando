
const express = require('express');
const router = express.Router();
const CheckoutController = require('../controllers/CheckoutController');
const authMiddleware = require('../middlewares/verificarToken');


router.post('/', authMiddleware, CheckoutController.process);

module.exports = router;