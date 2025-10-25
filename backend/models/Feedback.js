const mongoose = require("mongoose");

const feedbackSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  rating: { type: Number, required: true },
  comments: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Feedback", feedbackSchema);
