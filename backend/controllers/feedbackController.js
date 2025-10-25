const Feedback = require("../models/Feedback");

// Submit Feedback (any user)
exports.submitFeedback = async (req, res) => {
  try {
    const { name, email, rating, comments } = req.body;

    if (!name || !email || !rating || !comments) {
      return res.status(400).json({ success: false, message: "All fields are required" });
    }

    const feedback = new Feedback({ name, email, rating, comments });
    await feedback.save();

    return res.status(201).json({
      success: true,
      message: "Feedback submitted successfully",
      feedback,
    });
  } catch (err) {
    console.error("Submit Feedback Error:", err.message);
    return res.status(500).json({
      success: false,
      message: "Server error",
      error: err.message,
    });
  }
};

// Get all feedbacks (admin only)
exports.getAllFeedbacks = async (req, res) => {
  try {
    const feedbacks = await Feedback.find().sort({ date: -1 });
    return res.status(200).json({ success: true, feedbacks });
  } catch (err) {
    console.error("Get All Feedbacks Error:", err.message);
    return res.status(500).json({
      success: false,
      message: "Server error",
      error: err.message,
    });
  }
};

// ✅ Get latest feedback by email (Public — No token required)
exports.getLatestFeedback = async (req, res) => {
  try {
    const { email } = req.query;

    if (!email) {
      return res.status(400).json({
        success: false,
        message: "Email is required to fetch feedback",
      });
    }

    const latestFeedback = await Feedback.findOne({ email }).sort({ date: -1 });

    if (!latestFeedback) {
      return res.status(404).json({
        success: false,
        message: "No feedback found for this email",
      });
    }

    return res.status(200).json({
      success: true,
      feedback: latestFeedback,
    });
  } catch (err) {
    console.error("Get Latest Feedback Error:", err.message);
    return res.status(500).json({
      success: false,
      message: "Server error",
      error: err.message,
    });
  }
};
