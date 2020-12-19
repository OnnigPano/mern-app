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
        let { productId, quantity } = req.body;
        if (Number.parseInt(quantity) < 1) {
            return res.status(400).json({ error: 'Quantity can not be less than 1' });
        }
        try {
            let cart = await Cart.findOne({ userId: req.user.id }).exec();

            if (cart) {
                let product = await Product.findById(productId);
                if (!product) {
                    return res.status(404).json({ error: 'Product Not Found' });
                }
                let itemFound = cart.items.find((item) => item.product == productId);
                if (itemFound) {
                    itemFound.quantity = quantity;
                } else {
                    cart.items.push({ product: productId, quantity });
                }
            } else {
                cart = new Cart({
                    userId: req.user.id,
                    items: [{ product: productId, quantity }]
                });
            }

            await cart.save();
            //devolver el cart o el product?
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

            let populatedCart = await cart.populate({path: 'items.product', model:'Product'}).execPopulate();

            //Calcular importe total del carrito
            let totalAmount = populatedCart.items.reduce((acum, item) => {
                return acum + (item.quantity * item.product.price);
            }, 0);
            cart.total = totalAmount;
            await cart.save();

            res.status(200).json(populatedCart);

        } catch (e) {
            res.status(400).json(e);
        }
    },
    deleteProductFromCart: async (req, res) => {
        //tengo q actualizar el monto total al eliminar el producto
        try {
            let cart = await Cart.findOne({ userId: req.user.id }).exec();

            if (!cart) {
                return res.status(404).json({ error: 'Cart Not Found' });
            }
            
            cart.items = cart.items.filter((item) => new ObjectId(item.product).toString() !== req.params.id);
            await cart.save();
            res.status(200).json();
        } catch (e) {
            res.status(404).json(e.message)
        }
    }
}

module.exports = cartController;