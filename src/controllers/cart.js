const Product = require('../models/product');
const ObjectId = require('mongoose').Types.ObjectId;

const cartController = {
    addProductToCart: async (req, res) => {
        
        try {
            const product = await Product.findById(new ObjectId(req.body.id));
            if (!product) {
                return res.status(404).json({ error: "Product not found" })
            }
            req.user.cartProducts.push(product);
            await req.user.save()
            res.json(req.user.cartProducts);
        } catch (e) {
            res.status(400).json(e);
        }
    },
    getCart: async (req, res) => {

        try {
            const results = await req.user.populate('cartProducts').execPopulate();
            res.json(results.cartProducts);
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

module.exports = cartController;