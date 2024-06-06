const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const carSchema = new Schema({
  number: {
    type: String,
    required: true
  },
  model: {
    type: String,
    required: true
  }
}, {
  timestamps: true,
});

module.exports = mongoose.model("Car", carSchema);

