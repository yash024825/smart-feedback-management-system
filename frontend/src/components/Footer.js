// frontend/src/components/Footer.js
import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        background: "#007bff",
        color: "#fff",
        padding: "2rem 0",
        textAlign: "center",
        marginTop: "auto",
      }}
    >
      <h2>Contact Us</h2>
      <p>Email: support@mywebsite.com</p>
      <p>Phone: +91 98765 43210</p>
      <p>Address: Hyderabad, Telangana, India</p>
      <p>Follow us on: 🌐 LinkedIn | 📘 Facebook | 🐦 Twitter</p>
    </footer>
  );
};

export default Footer;
