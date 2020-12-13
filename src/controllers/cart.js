const Cart = require('../models/cart');
const ItemOrder = require('../models/itemOrder');
const Product = require('../models/product');
const ObjectId = require('mongoose').Types.ObjectId;


const cartController = {
    addProductToCart: async (req, res) => {
        /*
            Si existe carrito, se agrega el producto
            Si el producto ya existe, solo se debe actualizar la cantidad
            Si el carrito no existe, se crea y se le añade el producto 
        */
        const { productId, quantity } = req.body;
        try {
            let cart = await Cart.findOne({ userId: req.user.id }).exec();

            if (cart) {
                let product = await Product.findById(productId);
                if (!product) {
                    return res.status(404).json({ error: 'Product Not Found' });
                }
                if (Number.parseInt(quantity) < 1) {
                    return res.status(400).json({ error: 'Quantity can not be less than 1' });
                }
                let itemFound = cart.items.find((item) => item.product == productId);
                if (itemFound) {
                    itemFound.quantity += quantity;
                } else {
                    cart.items.push({product: productId, quantity});
                }
            } else {
                cart = new Cart({
                    userId: req.user.id,
                    items: [{product: productId, quantity}]
                });
            }

            await cart.save();

            return res.status(200).json(cart);
        } catch (e) {
            res.status(400).json(e.message);
        }
    },
    getCart: async (req, res) => {

        try {
            let cart = await Cart.findOne({ userId: req.user.id }).exec();

            if (!cart) {
                return res.status(404).json({});
            }

            let populatedCart = await cart.populate('items.product').execPopulate();

            res.status(200).json(populatedCart);

        } catch (e) {
            res.status(400).json(e);
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