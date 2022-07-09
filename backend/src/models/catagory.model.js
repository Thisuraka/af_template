const mongoose = require("mongoose");

const CatagorySchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  description: { type: String, required: true, trim: true },
  rooms: [
    { type: mongoose.Schema.Types.ObjectId, required: false, ref: "rooms" },
  ],
});

const Catagory = mongoose.model("catagories", CatagorySchema);
module.exports = Catagory;
