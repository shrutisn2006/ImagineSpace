import React, { useState } from "react";
import "../index.css";

export default function Feedback() {
  const [feedback, setFeedback] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (feedback.trim() === "") return;
    setSubmitted(true);
    setFeedback("");
  };

  return (
    <div className="feedback-page">
      {!submitted ? (
        <form className="feedback-box" onSubmit={handleSubmit}>
          <h1>💬 Feedback</h1>
          <p>Tell us what you think about ImagineSpace! 🌠</p>
          <textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="Type your thoughts here..."
          />
          <button type="submit">Submit 🚀</button>
        </form>
      ) : (
        <div className="thankyou-box">
          <h2>🌟 Thank You, Space Explorer!</h2>
          <p>Your feedback helps make ImagineSpace shine brighter. ✨</p>
          <button onClick={() => setSubmitted(false)}>💫 Leave More Feedback</button>
        </div>
      )}
    </div>
  );
}
