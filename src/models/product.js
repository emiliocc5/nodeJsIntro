const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

const { Schema } = mongoose;

const productSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    images: { type: [{ type: String, required: true }], default: [] },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // ref debe referirse al nombre del esquema definido en la otra entidad
  },
  {
    timestamps: true,
  },
);

const model = mongoose.model('Product', productSchema);

module.exports = model;
