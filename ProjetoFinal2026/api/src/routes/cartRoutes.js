// routes/cartRoutes.js
const express = require('express');
const router = express.Router();
const CartController = require('../controllers/CartController');
const authMiddleware = require('../middlewares/authMiddleware');

// Todas as rotas de carrinho precisam que o usuário esteja logado
router.use(authMiddleware);

router.get('/', CartController.getCart);
router.post('/', CartController.add);
router.delete('/:jogoId', CartController.remove);

module.exports = router;