const mongoose = require('mongoose');


/**
 * Creates schema for queues and creates Mongoose model.
 */
const schema = new mongoose.Schema({
    username: String,
    qIndex: Number,
    arrQueue: [{
        type: String
    }]
});

module.exports = QItems = mongoose.model('QItem', schema);