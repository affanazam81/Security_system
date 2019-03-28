const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CameraInfoSchema = new Schema({});

module.exports = CameraInfo = mongoose.model("camera_info", CameraInfoSchema);
