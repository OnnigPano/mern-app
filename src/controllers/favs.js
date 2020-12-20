const Product = require('../models/product');
const ObjectId = require('mongoose').Types.ObjectId;


const favsController = {
    addToFavs: async (req, res) => {
        //validar ObjectID
        try {
            let product = await Product.findById(req.params.id);
            if (!product) {
                return res.status(404).json({ error: 'Product not Found' });
            }
            let productAlreadyInFavs = req.user.favs.find((favItem) => favItem.toString() === product._id.toString());
            if (productAlreadyInFavs) {
                return res.status(200).json({ error: 'Product already in user favs' });
            }
            req.user.favs.push(product);
            await req.user.save();
            //Devuelvo populated, el product o solo el array de id?
            res.status(200).json(req.user.favs);
        } catch (e) {
            res.status(404).json(e);
        }
    },
    deleteFromFavs: async (req, res) => {
        try {
            req.user.favs = req.user.favs.filter((productId) => new ObjectId(productId).toString() !== req.params.id);
            await req.user.save();

            res.status(200).json(req.user.favs);
        } catch (e) {
            res.status(400).send(e);
        }
    },
    getAllFavs: async (req, res) => {
        try {
            let populatedFavs = await req.user.populate({path: 'favs', model: 'Product'}).execPopulate();   
            
            res.status(200).json(populatedFavs);
        } catch (e) {
            res.status(400).send(e);
        }
    }
}

module.exports = favsController;