const Product = require('../models/product');



const favsController = {
    addToFavs: async (req, res) => {
        //validar ObjectID
        try {
            let product = await Product.findById(req.params.id);
            if (!product) {
                return res.status(404).json({ error: 'Product not Found' });
            }
            let productAlreadyInFavs = req.user.favs.find((favItem) => favItem == product._id);
            if (productAlreadyInFavs) {
                return res.status(200).json(product);
            }
            req.user.favs.push(product);
            await req.user.save();
            //Devuelvo populated, el product o solo el array de id?
            res.status(200).json(req.user.favs);
        } catch (e) {
            res.status(404).json(e);
        }
    }
}

module.exports = favsController;