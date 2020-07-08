const express = require('express');
const router = express.Router();

const Product = require('../models/product')

router.get('/products', async (req, res) => {
    try {
        const products = await Product.find();
        res.send(products)
    } catch (e) {
        res.send(404)
    }
})

router.post('/products', async (req, res) => {
        const product = new Product(req.body);
    try {
        await product.save();
        res.status(201).send(product);
    } catch (e) {
        res.status(400).send(e);
    }
})

module.exports = router;