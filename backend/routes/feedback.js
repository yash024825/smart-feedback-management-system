const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const {
  submitFeedback,
  getAllFeedbacks,
  getLatestFeedback,
} = require("../controllers/feedbackController");

// Public: anyone can submit feedback
router.post("/", submitFeedback);

// Admin: get all feedbacks (requires token)
router.get("/", auth, getAllFeedbacks);

// ✅ Public: get latest feedback by email
router.get("/latest", getLatestFeedback);

module.exports = router;
