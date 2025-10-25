import React from "react";
import { Link, useNavigate } from "react-router-dom";
import websitelogo from "../assets/websitelogo.png";
import { useLogout } from "../api/authHeader"; // ✅ use custom logout hook

const Home = () => {
  const logout = useLogout(); // Use the hook for proper logout handling
  const navigate = useNavigate();

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
            onClick={logout} // ✅ logout using hook
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

      {/* Section 1 - Logo */}
      <section style={{ textAlign: "center", padding: "2rem 0" }}>
        <img
          src={websitelogo}
          alt="Website Logo"
          style={{ width: "150px", borderRadius: "50%" }}
        />
        <h1 style={{ marginTop: "1rem", color: "#333" }}>Welcome to MyWebsite</h1>
      </section>

      {/* Section 2 - Information */}
      <section style={{
        maxWidth: "900px",
        margin: "2rem auto",
        padding: "1rem",
        background: "#fff",
        borderRadius: "10px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
      }}>
        <h2 style={{ color: "#007bff", marginBottom: "1rem" }}>About This Platform</h2>
        <p style={{ color: "#555", lineHeight: "1.8", textAlign: "justify" }}>
          This platform is designed to showcase advanced API usage and backend integration
          in a professional full-stack environment. Users can submit feedback, view
          results, and explore analytics on the dashboard. Features include secure
          authentication, API rate limiting, and error handling to ensure reliability
          and performance. Each component is modular and scalable, allowing seamless
          integration with external APIs. This website serves as a robust foundation
          for professional-grade API-driven systems using React.js, Node.js, and Express.
        </p>
      </section>

      {/* Section 3 - Contact */}
      <section style={{
        background: "#007bff",
        color: "#fff",
        padding: "2rem 0",
        textAlign: "center"
      }}>
        <h2>Contact Us</h2>
        <p>Email: support@mywebsite.com</p>
        <p>Phone: +91 98765 43210</p>
        <p>Address: Hyderabad, Telangana, India</p>
        <p>Follow us on: 🌐 LinkedIn | 📘 Facebook | 🐦 Twitter</p>
      </section>
    </div>
  );
};

// Common style for navbar links
const navLinkStyle = {
  color: "#fff",
  textDecoration: "none",
  fontWeight: "500",
  transition: "0.3s",
};

export default Home;
