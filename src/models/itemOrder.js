const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemOrderSchema = new Schema({
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    },
    quantity: {
        type: Number,
        default: 1,
        min: [1, 'Quantity can not be less then 1.']
    }
}, {
    timestamps: true
});

const ItemOrder = new mongoose.model('ItemOrder', itemOrderSchema);

module.exports = ItemOrder;