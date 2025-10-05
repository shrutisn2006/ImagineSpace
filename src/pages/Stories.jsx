import { Link } from "react-router-dom";
import "../App.css";

const stories = [
  { id: 1, title: "👨‍🌾 Ravi and the Sky Storm", category: "Farmer" },
  { id: 2, title: "⚙️ Engineer Sam and the Dancing Sky", category: "Engineer" },
  { id: 3, title: "🧒 Kiran the School Kid and the Lost Signal", category: "Kid" },
  { id: 4, title: "👩‍✈️ Pilot:PJ and the Silent Sky", category: "Pilot" },
  { id: 5, title: "🧑‍🚀 Astronaut Leeva and the Solar Cloud", category: "Astronaut" },
];

export default function Stories() {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "40px",
        color: "white",
      }}
    >
      <h2 style={{ color: "#ffd60a", textShadow: "0 0 10px #ffd60a" }}>
        🚀 Choose a Story to Begin Your Adventure
      </h2>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          marginTop: "40px",
          gap: "30px",
        }}
      >
        {stories.map((story) => (
          <div
            key={story.id}
            style={{
              width: "260px",
              height: "140px",
              background: "rgba(0, 0, 30, 0.6)",
              border: "2px solid #00b4d8",
              borderRadius: "15px",
              boxShadow: "0 0 20px #00b4d8",
              transition: "all 0.3s ease-in-out",
            }}
          >
            <h3
              style={{
                marginTop: "20px",
                color: "#90e0ef",
                fontSize: "1.1rem",
              }}
            >
              {story.title}
            </h3>
            <p style={{ color: "#caf0f8", fontSize: "0.9rem" }}>
              Category: <strong>{story.category}</strong>
            </p>
            <Link
              to={`/story/${story.id}`}
              style={{
                display: "inline-block",
                marginTop: "10px",
                backgroundColor: "#00b4d8",
                color: "white",
                padding: "8px 15px",
                borderRadius: "8px",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              ✨ Explore Story
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
