const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const carStatusSchema = new Schema({
  owner: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true
  },
  carId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Car",
    required: true
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model("CarStatus", carStatusSchema);
