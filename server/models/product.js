const { Schema, model } = require("mongoose");
const categorySchema = require('./models/category.js')
const productSchema = new Schema({
  productName: {
    type: String,
    required: true,
    unique: true,
  },
  price: {
    type: Number,
    default: 5,
  },
  description: {
    type: String,
    min: 5,
    max: 50,
  },
  Category: [categorySchema],
},

{ timestamps: true});

const Product = model("Product", productSchema);

module.exports = Product;
