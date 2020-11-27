const User = require('../models/user');
const Product = require('../models/product');
const upload = require('../utils/uploader');

const userController = {
    createUser: async (req, res) => {

        /*
            Falta manejar errores, sobretodo los que vienen desde MongoDB 
         */
        const user = new User(req.body);
        if (!user) {
            return res.status(400).json({ success: false, code: 400, message: 'Error creating User' })
        }
        try {
            //await user.save();
            const token = await user.generateToken();
            res.status(201).json({ success: true, message: "User created successfully", data: user, token });
        } catch (error) {
            res.status(400).json({ success: false, code: 400, message: error.message, error: error.errors });
        }
    },
    login: async (req, res) => {

        try {
            const user = await User.findByCredentials(req.body.email, req.body.password);
            const token = await user.generateToken();
            res.status(200).json({ user, token });
        } catch (e) {
            res.status(401).json(e);
        }
    },
    logout: async (req, res) => {

        try {
            req.user.tokens = req.user.tokens.filter(token => {
                return token.token !== req.token;
            })
            await req.user.save();
            res.json();
        } catch (e) {
            res.status(500).json();
        }
    },
    logoutAll: async (req, res) => {

        try {
            req.user.tokens = [];
            await req.user.save();
            res.json();
        } catch (e) {
            res.status(500).json();
        }
    },
    getUser: (req, res) => {

        res.json(req.user);
    },
    deleteAuthUser: async (req, res) => {

        try {
            await req.user.remove()
            res.json(req.user);
        } catch (e) {
            res.status(401).json(e);
        }
    },
    uploadAvatar: function (req, res) {

        upload(req, res, (error) => {
            if (error) {
                res.status(400).json({ error })
            } else {
                req.user.profileImage = req.file.filename
                req.user.save()
                res.json(req.user)
            }
        })
    },
    addProductToCart: async (req, res) => {

        try {
            const product = await Product.findById(req.params.id)
            if (!product) {
                return res.status(404).json({ error: "Product not found" })
            }
            req.user.cartProducts.push(product)
            await req.user.save()
            res.json(req.user.cartProducts)
        } catch (e) {
            res.json(e)
        }
    },
    getCart: async (req, res) => {

        try {
            const products = await req.user.populate('cartProducts').execPopulate()
            res.json(products)
        } catch (e) {
            res.json(e)
        }

    },
    deleteProductFromCart: async (req, res) => {
        try {
            //removes all de refs with that ID but it should only remove ONE.
            req.user.cartProducts.pull(req.params.id);
            await req.user.save()
            res.json(req.user)
        } catch (e) {
            res.status(404).json(e)
        }
    }
}

module.exports = userController
