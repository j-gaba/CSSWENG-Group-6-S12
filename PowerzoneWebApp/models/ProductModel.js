// import module mongoose
var mongoose = require('mongoose');

// import module @mongoosejs/double
require('@mongoosejs/double');

// defines the schema for collection `personnel`
var ProductSchema = new mongoose.Schema({
    date: {
        type: Date,
        required: true
    },
    dateString: {
        type: String,
        required: true
    },
    supplier:{
        type: String,
        required: true
    },
    quantity: {
        type: mongoose.Schema.Types.Double,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    price: {
        type: mongoose.Schema.Types.Double,
        required: true
    },
    product: {
        type: String,
        required: true
    },
    productId: {
        type: String,
        required: true
    },
    withdrawalAmount: {
        type: mongoose.Schema.Types.Double,
        required: true
    }
});

/*
*    Exports a mongoose.model object based on `PersonnelSchema`when another script exports from this file
*    This model executes CRUD operations to collection `personnel`
*/
module.exports = mongoose.model('product', ProductSchema);
