// import module mongoose
var mongoose = require('mongoose');

// import module @mongoosejs/double
require('@mongoosejs/double');

// defines the schema for collection `transactions`
var TransactionSchema = new mongoose.Schema({
    status: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    dateString: {
        type: String,
        required: true
    },
    deliveryNumber: {
        type: String,
        required: true
    },
    invoiceNumber: {
        type: String,
        required: true
    },
    truckPlateNumber: {
        type: String,
        required: true
    },
    customerName: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    tinNumber: {
        type: String,
        required: true
    },
    transactionId: {
        type: String,
        required: true
    },
    dieselObject: {
        type: Object,
        required: false
    },
    gasolineObject: {
        type: Object,
        required: false
    },
    premium95Object: {
        type: Object,
        required: false
    },
    premium97Object: {
        type: Object,
        required: false
    },
    keroseneObject: {
        type: Object,
        required: false
    },
    hasProductObject: {
        type: Object,
        required: true
    },
    signatories: {
        type: Object,
        required: true
    },
    totalAmount: {
        type: String,
        required: true
    },
    remarks: {
        type: String,
        required: false
    },
    isDelivered: {
        type: Boolean,
        required: true
    }
});

/*
*    Exports a mongoose.model object based on `TransactionSchema`when another script exports from this file
*    This model executes CRUD operations to collection `transactions`
*/
module.exports = mongoose.model('Transaction', TransactionSchema);
