import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import websitelogo from "../assets/websitelogo.png";
import { useLogout } from "../api/authHeader";

const Result = () => {
  const navigate = useNavigate();
  const logout = useLogout();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const email = queryParams.get("email");

  const [feedbackList, setFeedbackList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");

  const handleBack = () => navigate("/dashboard");

  useEffect(() => {
    const fetchFeedback = () => {
      if (!email) {
        setErrorMsg("Email not provided. Cannot fetch feedback.");
        setLoading(false);
        return;
      }

      // Get all feedback from localStorage
      const allFeedback = JSON.parse(localStorage.getItem("feedback") || "[]");

      // Filter feedback for the logged-in user
      const userFeedback = allFeedback.filter(fb => fb.email === email);

      if (userFeedback.length === 0) {
        setErrorMsg("No feedback found for this user.");
      } else {
        setFeedbackList(userFeedback);
      }

      setLoading(false);
    };

    fetchFeedback();
  }, [email]);

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
        <h1 style={{ marginTop: "1rem", color: "#333" }}>Feedback Summary</h1>
        <p style={headerTextStyle}>Here’s a summary of your submitted feedback.</p>
      </section>

      {/* Feedback Card */}
      <section style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <div style={cardStyle}>
          {loading ? (
            <p style={{ textAlign: "center", color: "#666" }}>Loading feedback...</p>
          ) : errorMsg ? (
            <>
              <p style={{ textAlign: "center", color: "#ff4d4d" }}>{errorMsg}</p>
              <div style={{ textAlign: "center", marginTop: "1.5rem" }}>
                <button onClick={handleBack} style={backBtnStyle}>Back to Dashboard</button>
              </div>
            </>
          ) : (
            <>
              <h3 style={{ textAlign: "center", color: "#007bff", marginBottom: "1.5rem" }}>
                Your Submitted Feedback
              </h3>
              {feedbackList.map((fb, index) => (
                <div key={index} style={{ marginBottom: "1.5rem", borderBottom: "1px solid #eee", paddingBottom: "1rem" }}>
                  <p><strong>Name:</strong> {fb.name}</p>
                  <p><strong>Email:</strong> {fb.email}</p>
                  <p><strong>Rating:</strong> {fb.rating} / 5 ⭐</p>
                  <p><strong>Comments:</strong> {fb.comments}</p>
                  <p><strong>Date:</strong> {new Date(fb.date).toLocaleString()}</p>
                </div>
              ))}
              <div style={{ textAlign: "center", marginTop: "1rem" }}>
                <button onClick={handleBack} style={backBtnStyle}>Back to Dashboard</button>
              </div>
            </>
          )}
        </div>
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
const cardStyle = { background: "#fff", padding: "2rem", borderRadius: "10px", boxShadow: "0 4px 10px rgba(0,0,0,0.1)", width: "400px", textAlign: "left", lineHeight: "1.6" };
const backBtnStyle = { background: "#007bff", color: "#fff", border: "none", padding: "10px 20px", borderRadius: "6px", fontWeight: "bold", cursor: "pointer", marginTop: "1rem" };
const footerStyle = { background: "#007bff", color: "#fff", textAlign: "center", padding: "1.5rem 0", marginTop: "2rem" };

export default Result;
