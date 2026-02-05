const mongoose = require("mongoose");

const MenuSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  category: String,
  tags: [String],
  image: String
});

module.exports = mongoose.model("Menu", MenuSchema);
