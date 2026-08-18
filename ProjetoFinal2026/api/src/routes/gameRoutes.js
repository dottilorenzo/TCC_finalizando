const express = require('express');
const router = express.Router();
const GamesController = require('../controllers/GamesController');
const authMiddleware = require('../middlewares/authMiddleware');

router.get('/', GamesController.index);
router.get('/:id', GamesController.show);


router.post('/', authMiddleware, GamesController.create);

module.exports = router;