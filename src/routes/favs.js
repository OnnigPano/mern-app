const express = require('express');
const router = express.Router();
const favsController = require('../controllers/favs');
const auth = require('../middleware/auth');

router.get('/favs', auth, favsController.getAllFavs);
router.post('/favs/:id', auth, favsController.addToFavs);
router.delete('/favs/:id', auth, favsController.deleteFromFavs);

module.exports = router;