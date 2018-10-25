const mongoose = require("mongoose");
const { Schema } = mongoose;

const modelSchema = new Schema({
  author: String,
  name: String,
  genre: String,
  
  upvote: Boolean,
  downvote: Boolean
});

module.exports = mongoose.model("Model", modelSchema);
