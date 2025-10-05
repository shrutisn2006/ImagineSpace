import { useParams, Link } from "react-router-dom";
import React, { useState, useRef } from "react";
import allStories from "../data/allStories";

// Import all animation videos
import farmerVideo from "../assets/animations/farmer.mp4";
import engineerVideo from "../assets/animations/engineer.mp4";
import kidVideo from "../assets/animations/kid.mp4";
import pilotVideo from "../assets/animations/pilot.mp4";
import astronautVideo from "../assets/animations/astronaut.mp4";

export default function StoryView() {
  const { id } = useParams();
  const story = allStories.find((s) => s.id === parseInt(id));
  const [page, setPage] = useState(0);
  const [mode, setMode] = useState("read");
  const videoRef = useRef(null);

  if (!story) return <p>Story not found.</p>;

  const currentPage = story.pages[page];

  // Map full animation video per story
  const storyVideos = {
    1: farmerVideo,
    2: engineerVideo,
    3: kidVideo,
    4: pilotVideo,
    5: astronautVideo,
  };

  const currentVideo = storyVideos[story.id];

  // Function to replay animation
  const handleReplay = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "30px", color: "white" }}>
      <h2
        style={{
          color: "#ffd60a",
          textShadow: "0 0 10px #ffd60a",
          fontSize: "2rem",
        }}
      >
        {story.title}
      </h2>

      {/* Mode Buttons */}
      <div style={{ margin: "20px 0" }}>
        <button
          onClick={() => setMode("read")}
          style={{
            backgroundColor: mode === "read" ? "#0077b6" : "#023e8a",
            color: "white",
            padding: "10px 20px",
            border: "none",
            borderRadius: "8px",
            marginRight: "10px",
            cursor: "pointer",
          }}
        >
          📖 Read Story
        </button>
        <button
          onClick={() => setMode("animation")}
          style={{
            backgroundColor: mode === "animation" ? "#00b4d8" : "#023e8a",
            color: "white",
            padding: "10px 20px",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          🎞 Animation Mode
        </button>
      </div>

      {/* Story or Animation */}
      <div
        style={{
          border: "2px solid #00b4d8",
          borderRadius: "12px",
          padding: "25px",
          margin: "20px auto",
          maxWidth: "750px",
          background: "rgba(0, 0, 0, 0.6)",
          boxShadow: "0 0 15px #00b4d8",
        }}
      >
        {mode === "read" ? (
          <>
            <p style={{ fontSize: "1.2rem", lineHeight: "1.8" }}>
              {currentPage.text}
            </p>
            <p style={{ color: "#90e0ef", fontStyle: "italic" }}>
              📖 Page {page + 1} of {story.pages.length}
            </p>
          </>
        ) : currentVideo ? (
          <>
            <video
              ref={videoRef}
              src={currentVideo}
              autoPlay
              controls
              loop
              playsInline
              style={{
                width: "100%",
                maxWidth: "700px",
                borderRadius: "12px",
                boxShadow: "0 0 15px #00b4d8",
              }}
            />
            <div style={{ marginTop: "10px" }}>
              <button
                onClick={handleReplay}
                style={{
                  backgroundColor: "#0077b6",
                  color: "white",
                  padding: "10px 20px",
                  borderRadius: "8px",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                🔁 Replay Animation
              </button>
            </div>
          </>
        ) : (
          <p style={{ fontSize: "1.2rem", color: "#caf0f8" }}>
            ⚙️ Animation not available for this story.
          </p>
        )}
      </div>

      {/* Pagination (only visible in read mode) */}
      {mode === "read" && (
        <div style={{ marginTop: "20px" }}>
          <button
            disabled={page === 0}
            onClick={() => setPage(page - 1)}
            style={{
              backgroundColor: "#0077b6",
              color: "white",
              padding: "10px 20px",
              borderRadius: "8px",
              marginRight: "10px",
              cursor: page === 0 ? "not-allowed" : "pointer",
            }}
          >
            ⬅️ Previous
          </button>
          <button
            disabled={page === story.pages.length - 1}
            onClick={() => setPage(page + 1)}
            style={{
              backgroundColor: "#00b4d8",
              color: "white",
              padding: "10px 20px",
              borderRadius: "8px",
              cursor:
                page === story.pages.length - 1 ? "not-allowed" : "pointer",
            }}
          >
            Next ➡️
          </button>
        </div>
      )}

      {/* Back Button */}
      <div style={{ marginTop: "20px" }}>
        <Link
          to="/stories"
          style={{
            backgroundColor: "#03045e",
            color: "white",
            padding: "10px 20px",
            borderRadius: "8px",
            textDecoration: "none",
          }}
        >
          🏠 Back to Stories
        </Link>
      </div>
    </div>
  );
}
