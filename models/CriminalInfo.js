const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CriminalInfoSchema = new Schema({});

module.exports = CriminalInfo = mongoose.model("criminal_info", CriminalInfoSchema);
