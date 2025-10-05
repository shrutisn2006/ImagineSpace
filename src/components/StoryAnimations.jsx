import React from "react";

// Import all 5 story animation videos
import farmerVideo from "../assets/animations/farmer.mp4";
import engineerVideo from "../assets/animations/engineer.mp4";
import kidVideo from "../assets/animations/kid.mp4";
import pilotVideo from "../assets/animations/pilot.mp4";
import astronautVideo from "../assets/animations/astronaut.mp4";

export default function StoryAnimations({ storyId }) {
  // Match animation keywords from allStories.js to videos
  const videoMap = {
    // 👨‍🌾 Farmer story
    "farm-day": farmerVideo,
    "sunburst": farmerVideo,
    "space-weather": farmerVideo,
    "gadgets-error": farmerVideo,
    "app-alert": farmerVideo,
    "manual-check": farmerVideo,
    "happy-farm": farmerVideo,
    "sunrise": farmerVideo,

    // ⚙️ Engineer story
    "city-evening": engineerVideo,
    "aurora": engineerVideo,
    "sun-energy": engineerVideo,
    "signal-loss": engineerVideo,
    "talking": engineerVideo,
    "teamwork": engineerVideo,
    "storm-pass": engineerVideo,
    "city-sunrise": engineerVideo,

    // 🧒 Kid story
    "tv": kidVideo,
    "solar-storm": kidVideo,
    "satellite": kidVideo,
    "tv-off": kidVideo,
    "classroom": kidVideo,
    "friends": kidVideo,
    "learning": kidVideo,

    // 👩‍✈️ Pilot story
    "plane": pilotVideo,
    "satellite-link": pilotVideo,
    "radio-error": pilotVideo,
    "ionosphere": pilotVideo,
    "pilot-smart": pilotVideo,
    "clear-sky": pilotVideo,
    "safe-landing": pilotVideo,

    // 🧑‍🚀 Astronaut story
    "space-station": astronautVideo,
    "cme": astronautVideo,
    "solar-particles": astronautVideo,
    "flicker": astronautVideo,
    "shield": astronautVideo,
    "manual-tools": astronautVideo,
    "safe-station": astronautVideo,
    "earth-view": astronautVideo,
  };

  const videoSrc = videoMap[storyId];

  if (!videoSrc) {
    return (
      <p style={{ fontSize: "1.2rem", color: "#caf0f8" }}>
        ⚙️ Animation not available for this story.
      </p>
    );
  }

  return (
    <div style={{ marginTop: "20px" }}>
      <video
        src={videoSrc}
        autoPlay
        controls
        loop
        muted
        playsInline
        style={{
          width: "100%",
          maxWidth: "700px",
          borderRadius: "12px",
          boxShadow: "0 0 15px #00b4d8",
        }}
      />
    </div>
  );
}
