// frontend/src/pages/Signup.js
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

    if (!name || !email || !password || !confirm) {
      alert("All fields are required!");
      return;
    }

    if (password !== confirm) {
      alert("Passwords do not match!");
      return;
    }

    // Get existing users from localStorage or initialize empty array
    const users = JSON.parse(localStorage.getItem("users") || "[]");

    // Check if email already exists
    const existingUser = users.find(user => user.email === email);
    if (existingUser) {
      alert("Email already registered! Please login.");
      navigate("/login");
      return;
    }

    // Add new user
    users.push({ name, email, password });
    localStorage.setItem("users", JSON.stringify(users));

    alert("Signup successful! Please login.");
    navigate("/login"); // Redirect to login
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", background: "#f5f5f5" }}>
      <div style={{ width: "350px", padding: "2rem", borderRadius: "8px", background: "#fff", boxShadow: "0px 4px 8px rgba(0,0,0,0.1)", textAlign: "center" }}>
        <h2>Sign Up</h2>
        <form onSubmit={handleSignup}>
          <input
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={inputStyle}
          />
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={inputStyle}
          />
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={inputStyle}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            required
            style={inputStyle}
          />
          <button type="submit" style={submitBtnStyle}>
            Sign Up
          </button>
        </form>
        <p style={{ marginTop: "1rem" }}>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

// Styles
const inputStyle = { width: "100%", padding: "12px", marginBottom: "1rem", borderRadius: "6px", border: "1px solid #ddd", background: "#f0f6ff" };
const submitBtnStyle = { width: "100%", padding: "12px", background: "#00aaff", color: "#fff", border: "none", borderRadius: "6px", fontSize: "1rem", fontWeight: "bold", cursor: "pointer" };

export default Signup;
