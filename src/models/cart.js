const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ItemOrder = require('./itemOrder');

const cartSchema = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    items: [ItemOrder.schema]
}, {
    timestamps: true
});

const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;