const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const orderSchema = new Schema({
    product: {
        type: Schema.Types.ObjectId,
        ref: 'Product'
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
},
    { timestamps: true }
);
module.exports = mongoose.model('Order', orderSchema);