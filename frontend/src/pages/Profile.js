import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar"; // If you want to keep it separate
import { useLogout } from "../api/authHeader";
import websitelogo from "../assets/websitelogo.png";

const Profile = () => {
  const [user, setUser] = useState(null);
  const logout = useLogout();
  const navigate = useNavigate();

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user"));
    const token = localStorage.getItem("token");

    if (!userData || !token) {
      logout();
      navigate("/login");
      return;
    }

    // Demo: Use localStorage user object directly
    setUser({
      name: userData.name || "Demo User",
      email: userData.email,
      role: userData.role || "User",
      joined: userData.joined || new Date().toISOString(),
    });
  }, [logout, navigate]);

  if (!user) return <p style={{ textAlign: "center", marginTop: "2rem" }}>Loading profile...</p>;

  return (
    <div style={{ fontFamily: "Poppins, sans-serif", background: "#f9f9f9", minHeight: "100vh" }}>
      {/* Navbar */}
      <nav style={navStyle}>
        <div style={{ fontSize: "1.5rem", fontWeight: "bold" }}>🌐 MyWebsite</div>
        <div style={navLinksStyle}>
          <button style={navButtonStyle} onClick={() => navigate("/home")}>Home</button>
          <button style={navButtonStyle} onClick={() => navigate("/dashboard")}>Dashboard</button>
          <button style={navButtonStyle} onClick={() => navigate("/feedback")}>Feedback</button>
          <button style={navButtonStyle} onClick={() => navigate("/result")}>Result</button>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <button onClick={logout} style={logoutBtnStyle}>Logout</button>
          <div style={profileIconStyle} title="Profile">{user.name.charAt(0).toUpperCase()}</div>
        </div>
      </nav>

      {/* Header */}
      <section style={headerStyle}>
        <img src={websitelogo} alt="Website Logo" style={{ width: "120px", borderRadius: "50%" }} />
        <h1 style={{ marginTop: "1rem", color: "#333" }}>User Profile</h1>
        <p style={headerTextStyle}>View your account details and profile information.</p>
      </section>

      {/* Profile Card */}
      <section style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <div style={cardStyle}>
          <h3 style={{ textAlign: "center", color: "#007bff", marginBottom: "1.5rem" }}>Profile Information</h3>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Role:</strong> {user.role}</p>
          <p><strong>Joined:</strong> {new Date(user.joined).toLocaleDateString()}</p>
          <div style={{ textAlign: "center", marginTop: "1.5rem" }}>
            <button onClick={logout} style={submitBtnStyle}>Logout</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={footerStyle}>
        <p>© 2025 Smart Feedback Management System | All Rights Reserved</p>
      </footer>
    </div>
  );
};

// Styles
const navStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "1rem 2rem",
  background: "#007bff",
  color: "#fff",
  boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
};
const navLinksStyle = { display: "flex", gap: "1rem", fontSize: "1rem" };
const navButtonStyle = { background: "transparent", color: "#fff", border: "none", cursor: "pointer", fontWeight: "500" };
const logoutBtnStyle = { background: "#ff4d4d", color: "#fff", border: "none", borderRadius: "6px", padding: "8px 16px", cursor: "pointer", fontWeight: "bold" };
const profileIconStyle = { width: "40px", height: "40px", borderRadius: "50%", background: "#fff", display: "flex", justifyContent: "center", alignItems: "center", color: "#007bff", fontWeight: "bold", cursor: "pointer", border: "2px solid #fff", boxShadow: "0 2px 5px rgba(0,0,0,0.2)" };
const headerStyle = { textAlign: "center", padding: "2rem 0" };
const headerTextStyle = { color: "#666", maxWidth: "700px", margin: "0 auto", lineHeight: "1.6" };
const cardStyle = { background: "#fff", padding: "2rem", borderRadius: "10px", boxShadow: "0 4px 10px rgba(0,0,0,0.1)", width: "400px", textAlign: "left", lineHeight: "1.6" };
const submitBtnStyle = { background: "#007bff", color: "#fff", border: "none", padding: "10px 20px", borderRadius: "6px", fontWeight: "bold", cursor: "pointer", width: "100%" };
const footerStyle = { background: "#007bff", color: "#fff", textAlign: "center", padding: "1.5rem 0", marginTop: "2rem" };

export default Profile;
