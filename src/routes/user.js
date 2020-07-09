const express = require('express');
const router = express.Router();
const User = require('../models/user');
const Product = require('../models/product');
const auth = require('../middleware/auth');
const upload = require('../utils/uploader');

router.post('/users', async (req, res) => {
    const user = new User(req.body);
    try {
        //await user.save();
        const token = await user.generateToken();
        res.status(201).send({ user, token });
    } catch (e) {
        res.status(400).send(e);
    }
})

router.post('/users/login', async (req, res) => {

    try {
        const user = await User.findByCredentials(req.body.email, req.body.password);
        const token = await user.generateToken();
        res.status(200).send({ user, token });
    } catch (e) {
        res.status(400).send({error: e.message });
    }
})

router.post('/users/logout', auth, async (req, res) => {
    
    try {
        req.user.tokens = req.user.tokens.filter( token => {
           return token.token !== req.token;
        })
        await req.user.save();
        res.send();
    } catch (e) {
        res.status(500).send();
    }
})

router.post('/users/logoutAll', auth, async (req, res) => {
    try {
        req.user.tokens = [];
        await req.user.save();
        res.send();
    } catch (e) {
        res.status(500).send();
    }
})

router.post('/users/me', auth, (req, res) => {
    res.send(req.user);
})

router.delete('/users/me', auth, async (req, res) => {
    try {
        await req.user.remove()
        res.send(req.user);
    } catch (e) {
        res.status(401).send(e);
    } 
})

router.post('/users/avatar', auth, function (req, res) {
        upload(req, res, (error) => {
            if(error) {
                res.status(400).send({error})
            } else {
                req.user.profileImage = req.file.filename
                req.user.save()
                res.send(req.user)
            }
        }) 
})

router.post('/cart/add', auth, async(req, res) => {
    try {
        const product = await Product.findById(req.body.productID)
        if(!product) {
            res.status(404).send({error: "Product not found"})
        }
        req.user.cartProducts.push(product)
        await req.user.save()
        res.send(req.user.cartProducts)
    } catch (e) {
        res.send(e)
    }
})

router.get('/cart', auth, async (req, res) => {
    try {
        const products = await req.user.populate('cartProducts').execPopulate()
        res.send(products)
    } catch (e) {
        res.send(e)
    }
   
})


module.exports = router;