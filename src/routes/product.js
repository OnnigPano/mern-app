const express = require('express');
const router = express.Router();
const Product = require('../models/product')
const User = require('../models/user')
const auth = require('../middleware/auth')

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
            return res.status(404).send({error: "Product not found"})
        }
        res.send(product)
    } catch (e) {
        res.status(404).send(e)
    }
})

//elimina producto solo si es admin
router.delete('/products/:id', auth, async (req, res) => {
    try {
        const user = await User.findById(req.user.id);
        console.log(user)
        if(user.admin) {
            const product = await Product.findByIdAndDelete(req.params.id);
            if(!product) {
            return res.status(404).send({error: "Product not found"})
            }
            res.send(product)
        } else {
            res.status(403).send({error: Unauthorized})
        }
        
    } catch (e) {
        res.status(404).send(e)
    }
})

module.exports = router;