import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import websitelogo from "../assets/websitelogo.png";
import { useLogout } from "../api/authHeader"; // keep logout hook if needed

const Feedback = () => {
  const navigate = useNavigate();
  const logout = useLogout();
  const user = JSON.parse(localStorage.getItem("user"));

  const [rating, setRating] = useState("");
  const [comments, setComments] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!user) {
      alert("User not logged in!");
      navigate("/login");
      return;
    }

    if (!rating || !comments) {
      alert("Please fill out all fields!");
      return;
    }

    // Retrieve existing feedback from localStorage
    const allFeedback = JSON.parse(localStorage.getItem("feedback") || "[]");

    // Add new feedback for the logged-in user
    const newFeedback = {
      name: user.name,
      email: user.email,
      rating,
      comments,
      date: new Date().toISOString(),
    };

    allFeedback.push(newFeedback);
    localStorage.setItem("feedback", JSON.stringify(allFeedback));

    alert("Feedback submitted successfully!");
    setRating("");
    setComments("");
    navigate(`/result?email=${user.email}`);
  };

  return (
    <div style={{ fontFamily: "Poppins, sans-serif", background: "#f9f9f9", minHeight: "100vh" }}>
      {/* Navbar */}
      <nav style={navStyle}>
        <div style={{ fontSize: "1.5rem", fontWeight: "bold" }}>🌐 MyWebsite</div>
        <div style={navLinksStyle}>
          <Link to="/home" style={navLinkStyle}>Home</Link>
          <Link to="/dashboard" style={navLinkStyle}>Dashboard</Link>
          <Link to="/feedback" style={navLinkStyle}>Feedback</Link>
          <Link to="/result" style={navLinkStyle}>Result</Link>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <button onClick={logout} style={logoutBtnStyle}>Logout</button>
          <div style={profileIconStyle} onClick={() => navigate("/profile")} title="Go to Profile">P</div>
        </div>
      </nav>

      {/* Header */}
      <section style={headerStyle}>
        <img src={websitelogo} alt="Website Logo" style={{ width: "120px", borderRadius: "50%" }} />
        <h1 style={{ marginTop: "1rem", color: "#333" }}>Feedback Form</h1>
        <p style={headerTextStyle}>We value your feedback! Please share your thoughts.</p>
      </section>

      {/* Feedback Form */}
      <section style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <form onSubmit={handleSubmit} style={formStyle}>
          <input
            type="text"
            placeholder="Enter your name"
            value={user?.name || ""}
            style={inputStyle}
            disabled
          />
          <input
            type="email"
            placeholder="Enter your email"
            value={user?.email || ""}
            style={inputStyle}
            disabled
          />
          <select value={rating} onChange={(e) => setRating(e.target.value)} style={inputStyle}>
            <option value="">Rate your experience</option>
            <option value="5">Excellent (5⭐)</option>
            <option value="4">Very Good (4⭐)</option>
            <option value="3">Good (3⭐)</option>
            <option value="2">Fair (2⭐)</option>
            <option value="1">Poor (1⭐)</option>
          </select>
          <textarea
            placeholder="Write your comments..."
            value={comments}
            onChange={(e) => setComments(e.target.value)}
            rows="4"
            style={{ ...inputStyle, resize: "none" }}
          />
          <button type="submit" style={submitBtnStyle}>Submit Feedback</button>
        </form>
      </section>

      <footer style={footerStyle}>
        <p>© 2025 Smart Feedback Management System | All Rights Reserved</p>
      </footer>
    </div>
  );
};

// Styles (same as before)
const navStyle = { display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1rem 2rem", background: "#007bff", color: "#fff", boxShadow: "0 2px 5px rgba(0,0,0,0.1)" };
const navLinksStyle = { display: "flex", gap: "2rem", fontSize: "1rem" };
const navLinkStyle = { color: "#fff", textDecoration: "none", fontWeight: "500" };
const logoutBtnStyle = { background: "#ff4d4d", color: "#fff", border: "none", borderRadius: "6px", padding: "8px 16px", cursor: "pointer", fontWeight: "bold" };
const profileIconStyle = { width: "40px", height: "40px", borderRadius: "50%", background: "#fff", display: "flex", justifyContent: "center", alignItems: "center", color: "#007bff", fontWeight: "bold", cursor: "pointer", border: "2px solid #fff", boxShadow: "0 2px 5px rgba(0,0,0,0.2)" };
const headerStyle = { textAlign: "center", padding: "2rem 0" };
const headerTextStyle = { color: "#666", maxWidth: "700px", margin: "0 auto", lineHeight: "1.6" };
const formStyle = { background: "#fff", padding: "2rem", borderRadius: "10px", boxShadow: "0 4px 10px rgba(0,0,0,0.1)", width: "400px", textAlign: "center" };
const inputStyle = { width: "100%", padding: "10px", marginBottom: "1rem", borderRadius: "6px", border: "1px solid #ccc", outline: "none", fontSize: "1rem", background: "#f9f9f9" };
const submitBtnStyle = { background: "#007bff", color: "#fff", border: "none", padding: "10px 20px", borderRadius: "6px", fontWeight: "bold", cursor: "pointer", width: "100%" };
const footerStyle = { background: "#007bff", color: "#fff", textAlign: "center", padding: "1.5rem 0", marginTop: "2rem" };

export default Feedback;
