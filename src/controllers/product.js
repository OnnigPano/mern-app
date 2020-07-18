const Product = require('../models/product');
const User = require('../models/user');
const upload = require('../utils/uploader');

const productController = {
    getAll: async (req, res) => {
        try {
            const products = await Product.find();
            res.send(products)
        } catch (e) {
            res.status(404).send(e)
        }
    },
    create: async (req, res) => {
        const product = new Product(req.body);
        try {
            await product.save();
            res.status(201).send(product);
        } catch (e) {
            res.status(400).send(e);
        }
    },
    getOne: async (req, res) => {
        try {
            const product = await Product.findById(req.params.id);
            if(!product) {
                return res.status(404).send({error: "Product not found"})
            }
            res.send(product)
        } catch (e) {
            res.status(404).send(e)
        }
    },
    delete: async (req, res) => {
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
    },
    uploadImage:  (req, res) => {
        try {
           
            upload(req, res, async (error) => {
                const product = await Product.findById(req.body.id)
                if(!product) {
                    res.status(404).send({ error: 'Product not found' })
                }
                if(error) {
                    res.status(400).send({error});
                } else {
                    product.images.push(req.file.filename); 
                    product.save();
                    res.send(product);
                }
            }) 
        } catch (error) {
            res.send(e);
        }
        
    }
}

module.exports = productController