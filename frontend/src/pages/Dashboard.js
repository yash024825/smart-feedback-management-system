import React from "react";
import { Link, useNavigate } from "react-router-dom";
import websitelogo from "../assets/websitelogo.png";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/");
  };

  return (
    <div style={{ fontFamily: "Poppins, sans-serif", background: "#f9f9f9", minHeight: "100vh" }}>
      {/* Navbar */}
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1rem 2rem",
          background: "#007bff",
          color: "#fff",
          boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
        }}
      >
        <div style={{ fontSize: "1.5rem", fontWeight: "bold" }}>🌐 MyWebsite</div>

        <div style={{ display: "flex", gap: "2rem", fontSize: "1rem" }}>
          <Link to="/home" style={navLinkStyle}>Home</Link>
          <Link to="/dashboard" style={navLinkStyle}>Dashboard</Link>
          <Link to="/feedback" style={navLinkStyle}>Feedback</Link>
          <Link to="/result" style={navLinkStyle}>Result</Link>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <button
            onClick={handleLogout}
            style={{
              background: "#ff4d4d",
              color: "#fff",
              border: "none",
              borderRadius: "6px",
              padding: "8px 16px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Logout
          </button>

          <div
            onClick={() => navigate("/profile")}
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              background: "#fff",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "#007bff",
              fontWeight: "bold",
              cursor: "pointer",
              border: "2px solid #fff",
              boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
            }}
            title="Go to Profile"
          >
            <span>P</span>
          </div>
        </div>
      </nav>

      {/* Dashboard Header */}
      <section style={{ textAlign: "center", padding: "2rem 0" }}>
        <img
          src={websitelogo}
          alt="Website Logo"
          style={{ width: "120px", borderRadius: "50%" }}
        />
        <h1 style={{ marginTop: "1rem", color: "#333" }}>Dashboard Overview</h1>
        <p style={{ color: "#666", maxWidth: "700px", margin: "0 auto", lineHeight: "1.6" }}>
          Welcome to your Smart Feedback Dashboard. Here you can track user interactions,
          analyze feedback trends, and monitor the overall performance of the system in real time.
        </p>
      </section>

      {/* Dashboard Content */}
      <section style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "2rem", padding: "2rem" }}>
        {/* Card 1 */}
        <div style={cardStyle}>
          <h3 style={cardTitle}>Total Feedbacks</h3>
          <p style={cardValue}>120+</p>
          <p style={cardDesc}>All feedback entries collected from users</p>
        </div>

        {/* Card 2 */}
        <div style={cardStyle}>
          <h3 style={cardTitle}>Average Rating</h3>
          <p style={cardValue}>4.6 / 5</p>
          <p style={cardDesc}>Based on the latest survey responses</p>
        </div>

        {/* Card 3 */}
        <div style={cardStyle}>
          <h3 style={cardTitle}>Active Users</h3>
          <p style={cardValue}>85</p>
          <p style={cardDesc}>Users actively giving feedback</p>
        </div>

        {/* Card 4 */}
        <div style={cardStyle}>
          <h3 style={cardTitle}>Pending Reviews</h3>
          <p style={cardValue}>15</p>
          <p style={cardDesc}>Feedbacks awaiting moderation</p>
        </div>
      </section>

      {/* Bottom Section */}
      <footer style={{ background: "#007bff", color: "#fff", textAlign: "center", padding: "1.5rem 0" }}>
        <p>© 2025 Smart Feedback Management System | All Rights Reserved</p>
      </footer>
    </div>
  );
};

// Reusable styles
const navLinkStyle = {
  color: "#fff",
  textDecoration: "none",
  fontWeight: "500",
  transition: "0.3s",
};

const cardStyle = {
  background: "#fff",
  borderRadius: "10px",
  boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  padding: "1.5rem",
  width: "250px",
  textAlign: "center",
  transition: "transform 0.3s",
};

const cardTitle = {
  color: "#007bff",
  marginBottom: "0.5rem",
};

const cardValue = {
  fontSize: "2rem",
  fontWeight: "bold",
  color: "#333",
  marginBottom: "0.3rem",
};

const cardDesc = {
  color: "#555",
  fontSize: "0.9rem",
};

export default Dashboard;
