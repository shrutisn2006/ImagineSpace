import React, { useState, useEffect } from "react";
import "../index.css";

const allQuestions = [
  { question: "Which planet is known as the Red Planet?", options: ["Earth", "Mars", "Venus", "Jupiter"], answer: "Mars" },
  { question: "What is the closest star to Earth?", options: ["Alpha Centauri", "Sirius", "The Sun", "Polaris"], answer: "The Sun" },
  { question: "Which planet has the most moons?", options: ["Earth", "Saturn", "Jupiter", "Uranus"], answer: "Saturn" },
  { question: "What galaxy is Earth located in?", options: ["Andromeda Galaxy", "Milky Way Galaxy", "Whirlpool Galaxy", "Sombrero Galaxy"], answer: "Milky Way Galaxy" },
  { question: "Which gas makes up most of Earth’s atmosphere?", options: ["Oxygen", "Hydrogen", "Nitrogen", "Carbon Dioxide"], answer: "Nitrogen" },
  { question: "What is the hottest planet in our Solar System?", options: ["Mercury", "Venus", "Mars", "Jupiter"], answer: "Venus" },
  { question: "Which planet is famous for its rings?", options: ["Saturn", "Neptune", "Jupiter", "Uranus"], answer: "Saturn" },
  { question: "What force keeps the planets in orbit around the Sun?", options: ["Friction", "Magnetism", "Gravity", "Wind"], answer: "Gravity" },
  { question: "Which planet is known for having a Great Red Spot?", options: ["Jupiter", "Mars", "Neptune", "Uranus"], answer: "Jupiter" },
  { question: "How long does Earth take to orbit the Sun?", options: ["24 hours", "30 days", "365 days", "12 months"], answer: "365 days" },
  { question: "What type of galaxy is the Milky Way?", options: ["Elliptical", "Spiral", "Irregular", "Ring"], answer: "Spiral" },
  { question: "Which planet has the shortest day?", options: ["Earth", "Jupiter", "Mars", "Venus"], answer: "Jupiter" },
  { question: "What is the main component of the Sun?", options: ["Oxygen", "Nitrogen", "Hydrogen", "Helium"], answer: "Hydrogen" },
  { question: "Which planet is tilted on its side?", options: ["Earth", "Uranus", "Neptune", "Mars"], answer: "Uranus" },
  { question: "Which planet is farthest from the Sun?", options: ["Pluto", "Neptune", "Saturn", "Jupiter"], answer: "Neptune" },
  { question: "What is the name of our natural satellite?", options: ["The Moon", "Phobos", "Europa", "Titan"], answer: "The Moon" },
  { question: "Which star is the brightest in the night sky?", options: ["Sirius", "Betelgeuse", "Polaris", "Vega"], answer: "Sirius" },
  { question: "What causes day and night on Earth?", options: ["Earth's revolution", "Earth's rotation", "Sun's rotation", "Moon's orbit"], answer: "Earth's rotation" },
  { question: "Which planet is known as the Morning Star?", options: ["Mars", "Venus", "Jupiter", "Mercury"], answer: "Venus" },
  { question: "Which planet is known for its extreme winds?", options: ["Mars", "Neptune", "Saturn", "Venus"], answer: "Neptune" },
  { question: "What is a shooting star actually?", options: ["Star", "Meteor", "Comet", "Asteroid"], answer: "Meteor" },
  { question: "Which planet is called the Blue Planet?", options: ["Mars", "Earth", "Neptune", "Uranus"], answer: "Earth" },
  { question: "What is the center of our Solar System?", options: ["Earth", "Sun", "Moon", "Mars"], answer: "Sun" },
  { question: "Which planet has the largest volcano?", options: ["Earth", "Mars", "Jupiter", "Venus"], answer: "Mars" },
  { question: "What do we call a year on Mercury compared to Earth?", options: ["Longer", "Shorter", "Same", "Unknown"], answer: "Shorter" },
  { question: "What protects Earth from harmful solar radiation?", options: ["Atmosphere", "Clouds", "Ozone Layer", "Wind"], answer: "Ozone Layer" },
  { question: "What is a group of stars forming a pattern called?", options: ["Cluster", "Constellation", "Nebula", "Galaxy"], answer: "Constellation" },
  { question: "Which planet has blue color due to methane gas?", options: ["Neptune", "Mars", "Venus", "Saturn"], answer: "Neptune" },
  { question: "Which planet is known as the Gas Giant?", options: ["Earth", "Jupiter", "Venus", "Mars"], answer: "Jupiter" },
  { question: "What is a light-year a measure of?", options: ["Brightness", "Speed", "Distance", "Weight"], answer: "Distance" },
  { question: "What is the Sun mainly made of?", options: ["Oxygen", "Hydrogen & Helium", "Nitrogen", "Carbon"], answer: "Hydrogen & Helium" },
  { question: "Which planet is called the Twin of Earth?", options: ["Venus", "Mars", "Mercury", "Neptune"], answer: "Venus" },
  { question: "What planet is known as the Jewel of the Solar System?", options: ["Jupiter", "Saturn", "Uranus", "Neptune"], answer: "Saturn" },
  { question: "Which layer of the Sun is visible from Earth?", options: ["Core", "Photosphere", "Corona", "Chromosphere"], answer: "Photosphere" },
  { question: "What causes tides on Earth?", options: ["Winds", "Sun’s rays", "Moon’s gravity", "Volcanoes"], answer: "Moon’s gravity" },
  { question: "What is a comet mostly made of?", options: ["Rock and Ice", "Gas", "Metal", "Dust"], answer: "Rock and Ice" },
  { question: "What is the term for a star that suddenly increases in brightness?", options: ["Supernova", "Black Hole", "Pulsar", "Comet"], answer: "Supernova" },
  { question: "Which planet has the Great Dark Spot?", options: ["Neptune", "Mars", "Uranus", "Venus"], answer: "Neptune" },
  { question: "What planet’s day is longer than its year?", options: ["Venus", "Earth", "Mars", "Jupiter"], answer: "Venus" },
  { question: "What is the biggest planet?", options: ["Saturn", "Jupiter", "Neptune", "Uranus"], answer: "Jupiter" },
  { question: "What type of celestial body is the Sun?", options: ["Planet", "Star", "Comet", "Asteroid"], answer: "Star" },
  { question: "Which planet has polar ice caps?", options: ["Mars", "Earth", "Venus", "Mercury"], answer: "Mars" },
  { question: "What are Saturn’s rings made of?", options: ["Ice and Rock", "Gas", "Dust", "Water"], answer: "Ice and Rock" },
  { question: "Which planet spins backwards?", options: ["Venus", "Earth", "Mars", "Neptune"], answer: "Venus" },
  { question: "What color is the Sun?", options: ["White", "Yellow", "Red", "Orange"], answer: "White" },
  { question: "How many planets are in our Solar System?", options: ["7", "8", "9", "10"], answer: "8" },
  { question: "Which planet has the fastest winds?", options: ["Saturn", "Neptune", "Uranus", "Jupiter"], answer: "Neptune" },
  { question: "What is the smallest planet?", options: ["Mercury", "Mars", "Venus", "Earth"], answer: "Mercury" },
  { question: "What causes the northern lights?", options: ["Solar wind", "Comets", "Asteroids", "Volcanoes"], answer: "Solar wind" },
  { question: "Which planet has the most similar gravity to Earth?", options: ["Venus", "Mars", "Uranus", "Mercury"], answer: "Venus" },
  { question: "What is the term for a system of millions of stars?", options: ["Solar System", "Galaxy", "Constellation", "Nebula"], answer: "Galaxy" }
];

export default function Quiz() {
  const [questions, setQuestions] = useState([]);
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState("");
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    const shuffled = allQuestions.sort(() => 0.5 - Math.random()).slice(0, 10);
    setQuestions(shuffled);
  }, []);

  const handleAnswer = (option) => {
    setSelected(option);
    if (option === questions[current].answer) {
      setScore(score + 1);
    }

    setTimeout(() => {
      if (current < questions.length - 1) {
        setCurrent(current + 1);
        setSelected("");
      } else {
        setShowResult(true);
      }
    }, 800);
  };

  const restartQuiz = () => {
    setQuestions(allQuestions.sort(() => 0.5 - Math.random()).slice(0, 10));
    setCurrent(0);
    setScore(0);
    setSelected("");
    setShowResult(false);
  };

  return (
    <div className="quiz-container">
      <h1>🧠 ImagineSpace General Knowledge Quiz</h1>

      {!showResult && questions.length > 0 ? (
        <>
          <h2>
            Q{current + 1}: {questions[current].question}
          </h2>
          <div className="options">
            {questions[current].options.map((option, i) => (
              <button
                key={i}
                onClick={() => handleAnswer(option)}
                className={`quiz-option ${
                  selected === option
                    ? option === questions[current].answer
                      ? "correct"
                      : "wrong"
                    : ""
                }`}
              >
                {option}
              </button>
            ))}
          </div>
          <p className="progress">
            Question {current + 1} of {questions.length}
          </p>
        </>
      ) : showResult ? (
        <div className="result">
          <h2>🌟 Great Job! You scored {score} out of {questions.length}!</h2>
          <button className="restart-btn" onClick={restartQuiz}>
            🔁 Play Again
          </button>
        </div>
      ) : (
        <p>Loading questions...</p>
      )}
    </div>
  );
}
