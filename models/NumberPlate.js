const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const NumberPlateSchema = new Schema({});

module.exports = NumberPlate = mongoose.model("number_plate", NumberPlateSchema);
