const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const userController = require('../controllers/user');

router.post('/users', userController.createUser);
router.post('/users/login', userController.login);
router.post('/users/logout', auth, userController.logout);
router.post('/users/logoutAll', auth, userController.logoutAll);
router.get('/users/me', auth, userController.getUser);
router.delete('/users/me', auth, userController.deleteAuthUser);
router.post('/users/avatar', auth, userController.uploadAvatar);
router.get('/cart/add/:id', auth, userController.addProductToCart);
router.delete('/cart/delete/:id', auth, userController.deleteProductFromCart);
router.get('/cart', auth, userController.getCart);

module.exports = router;