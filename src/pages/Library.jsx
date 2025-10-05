import React from "react";
import "../index.css";

export default function Library() {
  const stories = [
    { id: 1, title: "👨‍🌾 Farmer", status: "Completed" },
    { id: 2, title: "⚙️ Engineer", status: "In Progress" },
    { id: 3, title: "🧒 Kid", status: "Locked" },
    { id: 4, title: "✈️ Pilot", status: "In Progress" },
    { id: 5, title: "👩‍🚀 Astronaut", status: "Locked" },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Completed":
        return "rgba(0, 255, 150, 0.9)";
      case "In Progress":
        return "rgba(255, 220, 80, 0.9)";
      default:
        return "rgba(180, 180, 180, 0.6)";
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        color: "white",
        textAlign: "center",
        padding: "40px",
      }}
    >
      <h1
        style={{
          fontSize: "2.8rem",
          color: "#ffd60a",
          textShadow: "0 0 12px rgba(255,230,109,0.9)",
          marginBottom: "40px",
        }}
      >
        📚 My Story Library
      </h1>

      {/* 🪐 Story Cards - Vertical Stack */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "25px",
          width: "100%",
          maxWidth: "400px",
        }}
      >
        {stories.map((story) => (
          <div
            key={story.id}
            style={{
              width: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.6)",
              border: `2px solid ${getStatusColor(story.status)}`,
              borderRadius: "14px",
              padding: "25px 15px",
              boxShadow: `0 0 20px ${getStatusColor(story.status)}`,
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              cursor: story.status === "Locked" ? "not-allowed" : "pointer",
              filter: story.status === "Locked" ? "blur(0.5px) brightness(0.7)" : "none",
              position: "relative",
            }}
            onMouseEnter={(e) => {
              if (story.status !== "Locked") {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.boxShadow = `0 0 30px ${getStatusColor(
                  story.status
                )}`;
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = `0 0 20px ${getStatusColor(
                story.status
              )}`;
            }}
          >
            {story.status === "Locked" && (
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "rgba(0, 0, 0, 0.7)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.3rem",
                  color: "#ffd60a",
                  borderRadius: "14px",
                }}
              >
                🔒 Locked
              </div>
            )}

            <h3
              style={{
                fontSize: "1.4rem",
                color: "#f9fafb",
                marginBottom: "10px",
                textShadow: "0 0 8px rgba(255,255,255,0.4)",
              }}
            >
              {story.title}
            </h3>
            <p
              style={{
                color: getStatusColor(story.status),
                fontWeight: "600",
                fontSize: "1.1rem",
              }}
            >
              {story.status}
            </p>
          </div>
        ))}
      </div>

      {/* 🎮 Buttons */}
      <div style={{ marginTop: "45px", display: "flex", gap: "20px" }}>
        <button className="button-link">🔁 Replay</button>
        <button className="button-link">▶ Continue</button>
      </div>
    </div>
  );
}
