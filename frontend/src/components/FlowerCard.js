// frontend/src/components/FlowerCard.js
import React from "react";

const FlowerCard = ({ title, description, imageUrl }) => {
  return (
    <div
      style={{
        width: "250px",
        borderRadius: "10px",
        overflow: "hidden",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        margin: "1rem",
        background: "#fff",
        transition: "transform 0.3s",
      }}
    >
      <img src={imageUrl} alt={title} style={{ width: "100%", height: "150px", objectFit: "cover" }} />
      <div style={{ padding: "1rem" }}>
        <h3 style={{ marginBottom: "0.5rem", color: "#007bff" }}>{title}</h3>
        <p style={{ color: "#555", fontSize: "0.9rem", lineHeight: "1.4" }}>{description}</p>
      </div>
    </div>
  );
};

export default FlowerCard;
