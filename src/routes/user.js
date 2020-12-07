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

module.exports = router;