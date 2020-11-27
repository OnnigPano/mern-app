const Product = require('../models/product');
const User = require('../models/user');
const upload = require('../utils/uploader');

const productController = {
    getAll: async (req, res) => {
        try {
            const products = await Product.find();
            res.send(products)
        } catch (e) {
            res.status(404).json(e)
        }
    },
    create: async (req, res) => {
        const product = new Product(req.body);
        try {
            await product.save();
            res.status(201).json(product);
        } catch (e) {
            res.status(400).json(e);
        }
    },
    getOne: async (req, res) => {
        try {
            const product = await Product.findById(req.params.id);
            if(!product) {
                return res.status(404).json({error: "Product not found"})
            }
            res.json(product)
        } catch (e) {
            res.status(404).json(e)
        }
    },
    delete: async (req, res) => {
        try {
            const user = await User.findById(req.user.id);
            
            if(user.admin) {
                const product = await Product.findByIdAndDelete(req.params.id);
                if(!product) {
                return res.status(404).json({error: "Product not found"})
                }
                res.json(product)
            } else {
                res.status(403).json({error: Unauthorized})
            }
            
        } catch (e) {
            res.status(404).json(e)
        }
    },
    uploadImage:  (req, res) => {
        try {
           
            upload(req, res, async (error) => {
                const product = await Product.findById(req.body.id)
                if(!product) {
                    res.status(404).json({ error: 'Product not found' })
                }
                if(error) {
                    res.status(400).json({error});
                } else {
                    product.images.push(req.file.filename); 
                    product.save();
                    res.json(product);
                }
            }) 
        } catch (error) {
            res.json(e);
        }
        
    }
}

module.exports = productController