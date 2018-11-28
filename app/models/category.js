const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { Hall } = require('../models/hall');

const categorySchema = new Schema({
    name: {
        type: String,
        required: true,
        unique:true
    },
    halls: {
        type: Schema.Types.ObjectId,
       ref: 'Hall'
    }
});


const Category = mongoose.model('Category', categorySchema);

module.exports = {
    Category
}

