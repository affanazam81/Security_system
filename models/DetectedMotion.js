const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DetectedMotionSchema = new Schema({
  motion_clip: {
    type: String,
    required: true
  },
  camera_id: {
    type: Schema.Types.ObjectId,
    ref: "camera"
  },
  time: {
    type: Date,
    default: Date.now
  }
});

module.exports = DetectedCriminalInfo = mongoose.model("detected_motion", DetectedMotionSchema);
