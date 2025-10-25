// index.js
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const feedbackRoutes = require("./routes/feedback");
const userRoutes = require("./routes/user");

app.use("/api/user", userRoutes);
app.use("/api/feedback", feedbackRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
