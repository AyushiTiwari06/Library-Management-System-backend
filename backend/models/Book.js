import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  productId: {
    type: String,
    required: true,
    unique: true
  },

  name: {
    type: String,
    required: true
  },

  price: {
    type: Number,
    required: true
  },

  featured: {
    type: Boolean,
    default: false
  },

  rating: {
    type: Number,
    default: 0
  },

  createdAt: {
    type: Date,
    default: Date.now
  },

  company: {
    type: String,
    required: true
  }
});

export default mongoose.model("Book", bookSchema);