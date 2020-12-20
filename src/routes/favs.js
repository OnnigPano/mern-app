const express = require('express');
const router = express.Router();
const favsController = require('../controllers/favs');
const auth = require('../middleware/auth');

router.post('/favs/:id', auth, favsController.addToFavs);

module.exports = router;