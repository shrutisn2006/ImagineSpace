import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Stories from "./pages/Stories";
import StoryView from "./pages/StoryView";
import Library from "./pages/Library";
import Feedback from "./pages/Feedback";
import Quiz from "./pages/Quiz";
import Explore from "./pages/Explore";
import Profile from "./pages/Profile";
import StarsBackground from "./components/StarsBackground"; // optional

function App() {
  return (
    <Router>
      {/* 🌌 Starry background */}
      <StarsBackground />

      {/* 🪐 Routes */}
      <div style={{ padding: 0, margin: 0 }}>
        <Routes>
          {/* 🚀 Start with Profile as Welcome Screen */}
          <Route path="/" element={<Profile />} />

          {/* 🏠 After Profile, go to Home */}
          <Route path="/home" element={<Home />} />
          <Route path="/stories" element={<Stories />} />
          <Route path="/story/:id" element={<StoryView />} />
          <Route path="/library" element={<Library />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
