import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Retrieve all registered users from localStorage
    const users = JSON.parse(localStorage.getItem("users") || "[]");

    // Check if email & password match any stored user
    const matchedUser = users.find(u => u.email === email && u.password === password);

    if (matchedUser) {
      // Save a fake token for session persistence
      localStorage.setItem("token", "demo-token");
      localStorage.setItem("user", JSON.stringify({ email: matchedUser.email, name: matchedUser.name }));
      localStorage.setItem("isLoggedIn", "true");

      alert("Login successful!");
      navigate("/home");
    } else {
      alert("Invalid email or password!");
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", background: "#f5f5f5" }}>
      <div style={{ width: "350px", padding: "2rem", borderRadius: "8px", background: "#fff", boxShadow: "0px 4px 8px rgba(0,0,0,0.1)", textAlign: "center" }}>
        <h2 style={{ marginBottom: "1.5rem", color: "#222" }}>Login</h2>
        <form onSubmit={handleLogin}>
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
          <button type="submit" style={submitBtnStyle}>Log in</button>
        </form>
        <p style={{ marginTop: "1rem" }}>
          Don’t have an account? <Link to="/signup" style={{ color: "blue", textDecoration: "none" }}>Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

// Styles
const inputStyle = { width: "100%", padding: "12px", marginBottom: "1rem", borderRadius: "6px", border: "1px solid #ddd", background: "#f0f6ff" };
const submitBtnStyle = { width: "100%", padding: "12px", background: "#00aaff", color: "#fff", border: "none", borderRadius: "6px", fontSize: "1rem", fontWeight: "bold", cursor: "pointer" };

export default Login;
