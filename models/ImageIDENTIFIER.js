const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ImageIdentifierSchema = new Schema({});

module.exports = ImageIdentifier = mongoose.model("image_identifier", ImageIdentifierSchema);
