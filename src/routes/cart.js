const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cart');
const auth = require('../middleware/auth');

router.post('/cart', auth, cartController.addProductToCart);
router.delete('/cart', auth, cartController.deleteProductFromCart);
router.get('/cart', auth, cartController.getCart);

module.exports = router;