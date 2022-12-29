const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    title:{type: String},
    ordering:{type: Number},
    active:{type: Number},
    books_id:[{type: mongoose.Schema.Types.ObjectId}]
})


module.exports = mongoose.model('Category', categorySchema)