const express = require('express');
const router = express.Router();
const productController = require('../controllers/product');
const auth = require('../middleware/auth')

router.get('/products', productController.getAll)
router.post('/products', productController.create)
router.get('/products/:id', productController.getOne)
//elimina producto solo si es admin
router.delete('/products/:id', auth, productController.delete)
router.post('/products/upload/image', productController.uploadImage);

module.exports = router;