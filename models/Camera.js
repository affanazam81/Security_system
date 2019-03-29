const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CameraSchema = new Schema({
  location: {
    type: String,
    required: true
  },
  coordinate: {
    type: [Number],
    required: true
  },
  is_live: {
    type: Boolean,
    default: false
  }
});

module.exports = DetectedCriminalInfo = mongoose.model("camera", CameraSchema);
