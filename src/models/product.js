const mongoose = require('mongoose');
const validator = require('validator');

const Schema = mongoose.Schema;

const productSchema = new Schema({
    productName: {
        type: String,
        trim: true,
        required: true,
        validate(value) {
            if(validator.isEmpty(value)) {
                throw new Error('Please enter a product name')
            }
        }
    },    
    price: {
        type: String,
        required: true,
        validate(value) {
        if(validator.isEmpty(value)) {
            throw new Error('Please enter a price')
            }
        }
    }, 
    category: {
        type: String
    },
    description: {
        type: String
    },
    images: [],
}, {
    timestamps: true
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;