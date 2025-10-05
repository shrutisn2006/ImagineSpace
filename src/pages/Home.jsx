import React, { useEffect, useState } from "react";

export default function Home() {
  const [user, setUser] = useState(null);

  // 🧠 Load profile from localStorage
  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("userProfile"));
    if (savedUser) setUser(savedUser);
  }, []);

  const userName = user?.name ? user.name : "Explorer";
  const storiesDone = user?.storiesRead || 0;
  const totalStories = user?.totalStories || 5;
  const quizzesDone = user?.quizzesCompleted || 0;
  const totalQuizzes = user?.totalQuizzes || 5;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        minHeight: "100vh",
        textAlign: "center",
        paddingTop: "80px",
        paddingBottom: "50px",
      }}
    >
      {/* 🌠 Title Section */}
      <h1
        style={{
          fontSize: "4rem",
          color: "#ffd60a",
          textShadow: "0 0 25px rgba(255,214,10,0.9)",
          marginBottom: "15px",
          fontWeight: "800",
        }}
      >
        🚀 Welcome, {userName} to{" "}
        <span style={{ color: "#90e0ef", textShadow: "0 0 25px #48cae4" }}>
          ImagineSpace!
        </span>
      </h1>

      <p
        style={{
          fontSize: "1.5rem",
          color: "#caf0f8",
          maxWidth: "950px",
          marginBottom: "60px",
          lineHeight: "2.1",
          fontWeight: "500",
          textShadow: "0 0 10px rgba(72,202,228,0.35)",
        }}
      >
        Embark on a journey through stories, quizzes, and cosmic wonders. <br />
        Discover how heroes — Farmers, Engineers, and Astronauts — make our
        universe shine! 🌌
      </p>

      {/* 🌌 Cards Section */}
      <div
        style={{
          display: "flex",
          gap: "60px",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "stretch",
          width: "100%",
          maxWidth: "1200px",
        }}
      >
        {/* 🚀 Exploration Card */}
        <div style={cardBox}>
          <h2 style={cardTitle}>🪐 Start Exploring</h2>
          <p style={cardText}>
            Explore interactive stories, fascinating facts, and cosmic knowledge
            through visuals and adventures.
          </p>
          <div style={buttonGroup}>
            <a href="/stories" style={buttonBlue}>
              📖 Stories
            </a>
            <a href="/explore" style={buttonBlue}>
              🌌 Explore
            </a>
            <a href="/library" style={buttonBlue}>
              📚 Library
            </a>
          </div>
        </div>

        {/* 🧠 Challenge Card */}
        <div style={cardBox}>
          <h2 style={cardTitle}>🧠 Challenge Yourself</h2>
          <p style={cardText}>
            Test your knowledge, share feedback, and track your cosmic progress.
          </p>
          <div style={buttonGroup}>
            <a href="/quiz" style={buttonYellow}>
              ❓ Quiz
            </a>
            <a href="/feedback" style={buttonYellow}>
              💬 Feedback
            </a>
            <a href="/profile" style={buttonYellow}>
              👤 Profile
            </a>
          </div>
        </div>
      </div>

      {/* 📈 Progress Section */}
      <div style={{ marginTop: "50px", textAlign: "center" }}>
        <h3
          style={{
            color: "#ffd60a",
            fontSize: "1.6rem",
            textShadow: "0 0 15px #ffd60a",
          }}
        >
          📊 Your Progress
        </h3>
        <p
          style={{
            fontSize: "1.2rem",
            color: "#caf0f8",
            marginTop: "10px",
          }}
        >
          Stories completed: {storiesDone}/{totalStories} | Quizzes done:{" "}
          {quizzesDone}/{totalQuizzes}
        </p>
      </div>
    </div>
  );
}

/* 🌌 Shared Styles */
const cardBox = {
  background: "rgba(0, 0, 0, 0.6)",
  border: "2px solid #00b4d8",
  borderRadius: "15px",
  padding: "35px",
  boxShadow: "0 0 25px #00b4d8",
  width: "340px",
  minHeight: "350px",
  transition: "0.3s ease",
};

const cardTitle = {
  fontSize: "2rem",
  color: "#ffd60a",
  marginBottom: "15px",
  textShadow: "0 0 15px rgba(255,214,10,0.8)",
};

const cardText = {
  fontSize: "1.2rem",
  color: "#caf0f8",
  lineHeight: "1.8",
  marginBottom: "25px",
};

const buttonGroup = {
  display: "flex",
  flexWrap: "wrap",
  gap: "15px",
  justifyContent: "center",
};

const buttonBase = {
  textDecoration: "none",
  padding: "14px 28px",
  borderRadius: "12px",
  fontSize: "1.1rem",
  fontWeight: "700",
  transition: "all 0.3s ease",
  boxShadow: "0 0 12px rgba(0,0,0,0.4)",
};

const buttonBlue = {
  ...buttonBase,
  background: "linear-gradient(145deg, #00b4d8, #0077b6)",
  color: "#fff",
};

const buttonYellow = {
  ...buttonBase,
  background: "linear-gradient(145deg, #ffd60a, #ffb703)",
  color: "#03045e",
};
