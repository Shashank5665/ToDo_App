const mongoose = require("mongoose");

const homeSchema = new mongoose.Schema({
  name: {
    type: String,
  },
});

const homeItem = mongoose.model("homeItem", homeSchema);
module.exports = homeItem;
