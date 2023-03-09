const { Schema, model } = require("mongoose");

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  price: {
    type: String,
    default: 'No Price Listed',
  },
  photo_ref: {
    type: String
  },
  description: {
    type: String,
    min: 8,
    max: 180,
    default: "No description available, product entry will need to be updated."
  },
  category: {
    type: String,
    default: 'category_NA'
  },
  subcategory: {
    type: String,
    default: 'subcategory_NA'
  },
  theme: {
    type: String,
    default: 'theme_NA'
  }
},
{ timestamps: true});

const Product = model("Product", productSchema);

module.exports = Product;