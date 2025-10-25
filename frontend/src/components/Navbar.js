import React from "react";
import { Link } from "react-router-dom";
import { useLogout } from "../api/authHeader";
import websitelogo from "../assets/websitelogo.png";

const Navbar = () => {
  const logout = useLogout();

  return (
    <nav className="navbar">
      <img src={websitelogo} alt="Logo" className="logo" />
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/feedback">Feedback</Link></li>
      </ul>
      <button onClick={logout} className="logout-btn">
        Logout
      </button>
    </nav>
  );
};

export default Navbar;
