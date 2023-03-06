const { Schema, model } = require("mongoose");

const productSchema = new Schema({
  name: {
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
    min: 8,
    max: 180,
    default: "No description available, product entry will need to be updated."
  },
  category: {
    type: String,
    enum: ['category_NA', 'coffee', 'donut', 'pastry', 'cupcake', 'cookie', 'cake']
    default: 'category_NA'
  },
  theme: {
    type: String,
    default: 'theme_NA'
  }
},
{ timestamps: true});

const Product = model("Product", productSchema);

module.exports = Product;
