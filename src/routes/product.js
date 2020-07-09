const express = require('express');
const router = express.Router();
const Product = require('../models/product')

router.get('/products', async (req, res) => {
    try {
        const products = await Product.find();
        res.send(products)
    } catch (e) {
        res.status(404).send(e)
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

router.get('/products/:id', async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if(!product) {
            res.status(404).send({error: "Product not found"})
        }
        res.send(product)
    } catch (e) {
        res.status(404).send(e)
    }
})

//hay que permitir borrarlo si es admin. por ahora elimina siempre
router.delete('/products/:id', async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        if(!product) {
            res.status(404).send({error: "Product not found"})
        }
        res.send(product)
    } catch (e) {
        res.status(404).send(e)
    }
})

module.exports = router;