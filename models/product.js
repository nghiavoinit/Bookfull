const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    title: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require:true
    },
    count: {
        type: Number,
        require:true
    },
    img: {
        type: String,
        require:true,
    },
    date: {
        type: Date,
        require:true
    },
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    inCart: {
        type: Boolean,
        require:true
    }
    
});

module.exports= mongoose.model('Product', productSchema);