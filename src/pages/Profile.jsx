import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const navigate = useNavigate();

  // 🌠 Load saved user profile
  const storedUser = JSON.parse(localStorage.getItem("userProfile"));
  const [user, setUser] = useState(
    storedUser || {
      name: "",
      age: "",
      avatar: "",
      storiesRead: 0,
      totalStories: 5,
      quizzesCompleted: 0,
      totalQuizzes: 5,
      badges: [],
    }
  );
  const [isCreated, setIsCreated] = useState(!!storedUser);
  const [launching, setLaunching] = useState(false);

  // 💾 Save to localStorage whenever user changes
  useEffect(() => {
    if (isCreated) {
      localStorage.setItem("userProfile", JSON.stringify(user));
    }
  }, [user, isCreated]);

  // 🚀 Auto-redirect if user already exists
  useEffect(() => {
    if (storedUser) {
      const timer = setTimeout(() => {
        navigate("/home");
      }, 3000); // ⏳ Give 3 seconds before redirect
      return () => clearTimeout(timer);
    }
  }, [navigate, storedUser]);

  // 👩‍🚀 Avatar choices
  const avatars = [
    "https://cdn-icons-png.flaticon.com/512/4140/4140048.png",
    "https://cdn-icons-png.flaticon.com/512/4140/4140051.png",
    "https://cdn-icons-png.flaticon.com/512/2922/2922510.png",
  ];

  // ✨ Handle profile creation
  const handleCreateProfile = () => {
    if (user.name.trim() === "" || user.avatar === "") {
      alert("Please enter a name and select an avatar!");
      return;
    }
    setIsCreated(true);
    setLaunching(true);
    localStorage.setItem("userProfile", JSON.stringify(user));

    // Simulate “launch” transition
    setTimeout(() => {
      navigate("/home");
    }, 2500);
  };

  // 🔄 Reset profile
  const handleReset = () => {
    localStorage.removeItem("userProfile");
    setUser({
      name: "",
      age: "",
      avatar: "",
      storiesRead: 0,
      totalStories: 5,
      quizzesCompleted: 0,
      totalQuizzes: 5,
      badges: [],
    });
    setIsCreated(false);
  };

  // 🌌 Launch animation
  if (launching) {
    return (
      <div
        style={{
          textAlign: "center",
          color: "white",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          background:
            "radial-gradient(circle at 50% 20%, #03045e, #000814, #001d3d)",
        }}
      >
        <h1 style={{ fontSize: "2.5rem", color: "#ffd60a" }}>
          🚀 Launching Your Space Journey...
        </h1>
        <p style={{ marginTop: "20px", color: "#caf0f8" }}>
          Get ready, {user.name || "Explorer"}!
        </p>
      </div>
    );
  }

  // 🌠 Main UI
  return (
    <div
      style={{
        color: "white",
        padding: "40px 20px",
        textAlign: "center",
        minHeight: "100vh",
        background:
          "radial-gradient(circle at 50% 20%, #03045e, #000814, #001d3d)",
      }}
    >
      {/* 🌟 NEW USER SETUP */}
      {!isCreated ? (
        <div>
          <h1
            style={{
              color: "#ffd60a",
              textShadow: "0 0 15px #ffd60a",
              fontSize: "2.3rem",
              marginBottom: "15px",
            }}
          >
            🌠 Welcome Explorer!
          </h1>
          <p style={{ color: "#caf0f8", fontSize: "1.1rem", marginBottom: "30px" }}>
            Choose your space name, age, and avatar to begin your journey!
          </p>

          {/* Name Input */}
          <input
            type="text"
            placeholder="Enter your explorer name..."
            value={user.name}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
            style={{
              padding: "12px 20px",
              borderRadius: "8px",
              border: "2px solid #00b4d8",
              background: "rgba(255,255,255,0.1)",
              color: "white",
              outline: "none",
              fontSize: "1rem",
              marginBottom: "15px",
              width: "250px",
            }}
          />
          <br />

          {/* Age Input */}
          <input
            type="number"
            placeholder="Age"
            value={user.age}
            onChange={(e) => setUser({ ...user, age: e.target.value })}
            style={{
              padding: "10px",
              borderRadius: "8px",
              border: "2px solid #00b4d8",
              background: "rgba(255,255,255,0.1)",
              color: "white",
              outline: "none",
              fontSize: "1rem",
              width: "100px",
              marginBottom: "25px",
            }}
          />
          <br />

          {/* Avatar Selection */}
          <h3 style={{ color: "#90e0ef" }}>🧑‍🚀 Choose Your Avatar</h3>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "25px",
              marginTop: "15px",
              marginBottom: "30px",
            }}
          >
            {avatars.map((img, index) => (
              <img
                key={index}
                src={img}
                alt="avatar"
                onClick={() => setUser({ ...user, avatar: img })}
                style={{
                  width: "90px",
                  height: "90px",
                  borderRadius: "50%",
                  border:
                    user.avatar === img
                      ? "4px solid #00b4d8"
                      : "3px solid transparent",
                  cursor: "pointer",
                  boxShadow:
                    user.avatar === img
                      ? "0 0 20px #00b4d8"
                      : "0 0 5px #48cae4",
                  transition: "0.3s",
                }}
              />
            ))}
          </div>

          <button
            onClick={handleCreateProfile}
            style={{
              background: "linear-gradient(90deg, #00b4d8, #48cae4)",
              color: "#03045e",
              fontWeight: "bold",
              padding: "12px 25px",
              border: "none",
              borderRadius: "10px",
              fontSize: "1.1rem",
              cursor: "pointer",
              boxShadow: "0 0 15px #00b4d8",
            }}
          >
            🚀 Start My Adventure
          </button>
        </div>
      ) : (
        // 🌟 RETURNING USER (existing profile)
        <div>
          <h1
            style={{
              color: "#ffd60a",
              textShadow: "0 0 15px #ffd60a",
              fontSize: "2.5rem",
              marginBottom: "25px",
            }}
          >
            👩‍🚀 Welcome Back, {user.name}!
          </h1>
          <img
            src={user.avatar}
            alt="profile avatar"
            style={{
              width: "120px",
              borderRadius: "50%",
              border: "3px solid #00b4d8",
              boxShadow: "0 0 15px #48cae4",
              marginBottom: "20px",
            }}
          />
          <p style={{ color: "#caf0f8", fontSize: "1.1rem" }}>
            Preparing your dashboard...
          </p>
        </div>
      )}
    </div>
  );
}
