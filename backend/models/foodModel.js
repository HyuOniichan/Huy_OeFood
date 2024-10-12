const mongoose = require('mongoose')
const Schema = mongoose.Schema

const foodTagSchema = new Schema({
    tag: { type: String }
})

const foodSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    address: { type: String }, 
    thumbnail: { type: String }, 
    tags: { type: [foodTagSchema], default: undefined }, 
    cart: { type: Boolean, default: false }
}, {
    timestamps: true
})

module.exports = mongoose.model('Food', foodSchema) 
