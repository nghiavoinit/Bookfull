const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {
        type: String,
        require:true
    },
    password: {
        type: String,
        require:true
    },
    createdProducts: [{
        type: Schema.Types.ObjectId,
        ref: 'Product'
    }]
})
module.exports = mongoose.model('User', userSchema);