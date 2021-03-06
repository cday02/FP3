const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemSchema = new Schema({
  marketname: { type: String, required: true },
  nameid: { type: String, required: true },
  rarity: { type: String, required: true },
  image: { type: String, required: false },
  price: { type: Number, required: true }
});

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;
