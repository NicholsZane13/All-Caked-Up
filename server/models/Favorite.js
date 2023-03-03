const { Schema, Types } = require("mongoose");

const favoriteSchema = new Schema({
  product_id: {
    type: Types.ObjectId,
    ref: 'Product'
  }
});

module.exports = favoriteSchema;