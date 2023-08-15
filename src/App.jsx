import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import VideoListPage from "./VideoListPage";
import VideoPlay from "./VideoPlay";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white">
        <Routes>
          <Route path="/" element={<VideoListPage />} />
          <Route path="/video/:id" element={<VideoPlay />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

