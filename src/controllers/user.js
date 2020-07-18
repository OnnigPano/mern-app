const User = require('../models/user');
const Product = require('../models/product');
const upload = require('../utils/uploader');

const userController = {
    createUser: async (req, res) => {

        /*
            Falta manejar errores, sobretodo los que vienen desde MongoDB 
         */
        const user = new User(req.body);
        if(!user) {
            return res.status(400).send({ error: 'error en createUser' })
        }
        try {
            //await user.save();
            const token = await user.generateToken();
            res.status(201).send({ user, token });
        } catch (e) {
            res.status(400).send(e);
        }
    },
    login: async (req, res) => {

        try {
            const user = await User.findByCredentials(req.body.email, req.body.password);
            const token = await user.generateToken();
            res.status(200).send({ user, token });
        } catch (e) {
            res.status(401).send(e);
        }
    },
    logout:  async (req, res) => {
    
        try {
            req.user.tokens = req.user.tokens.filter( token => {
            return token.token !== req.token;
            })
            await req.user.save();
            res.send();
        } catch (e) {
            res.status(500).send();
        }
    },
    logoutAll: async (req, res) => {

        try {
            req.user.tokens = [];
            await req.user.save();
            res.send();
        } catch (e) {
            res.status(500).send();
        }
    },
    getUser:  (req, res) => {

        res.send(req.user);
    },
    deleteAuthUser: async (req, res) => {

        try {
            await req.user.remove()
            res.send(req.user);
        } catch (e) {
            res.status(401).send(e);
        } 
    },
    uploadAvatar: function (req, res) {

        upload(req, res, (error) => {
            if(error) {
                res.status(400).send({error})
            } else {
                req.user.profileImage = req.file.filename
                req.user.save()
                res.send(req.user)
            }
        }) 
    },
    addProductToCart: async(req, res) => {

        try {
            const product = await Product.findById(req.params.id)
            if(!product) {
            return res.status(404).send({error: "Product not found"})
            }
            req.user.cartProducts.push(product)
            await req.user.save()
            res.send(req.user.cartProducts)
        } catch (e) {
            res.send(e)
        }
    },
    getCart: async (req, res) => {

        try {
            const products = await req.user.populate('cartProducts').execPopulate()
            res.send(products)
        } catch (e) {
            res.send(e)
        }
    
    },
    deleteProductFromCart: async (req, res) => {
        try {
            //removes all de refs with that ID but it should remove ONE.
            req.user.cartProducts.pull(req.params.id);
            await req.user.save()
            res.send(req.user)
        } catch (e) {
            res.status(404).send(e)
        }
    }
}

module.exports = userController
