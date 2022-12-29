const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title:{type: String, required:true},
    description:{type: String, required:true},
    publishDate:{type: Date, required:true},
    pageCount:{type: Number, required:true},
    createdAT:{type: Date, required:true, default: Date.now},
    ImageUrl:{type:String, required:true},
    author:{type:String, required:true}
})


module.exports = mongoose.model('Book', bookSchema)