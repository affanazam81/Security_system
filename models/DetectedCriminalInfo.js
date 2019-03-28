const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DetectedCriminalInfoSchema = new Schema({});

module.exports = DetectedCriminalInfo = mongoose.model("detected_criminal", DetectedCriminalInfoSchema);
