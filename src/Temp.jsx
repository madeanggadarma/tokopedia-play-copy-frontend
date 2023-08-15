import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useParams,
} from "react-router-dom";
import Navbar from "./Navbar";
import VideoCard from "./VideoCard";
import VideoPlay from "./VideoPlay";
import "./App.css";

const videoData = [
  // Your video data...
];

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [tagFilter, setTagFilter] = useState("");

  const handleSearch = (newSearchTerm) => {
    setSearchTerm(newSearchTerm);
  };

  const handleTagFilter = (tag) => {
    setTagFilter(tag);
  };

  // Define a filtering function based on the search term and tag filter
  const filterVideos = (video) => {
    return (
      video.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (tagFilter === "" || video.tags.includes(tagFilter))
    );
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white">
        <Navbar onSearch={handleSearch} onTagFilter={handleTagFilter} />
        <Routes>
          <Route
            path="/"
            element={
              <VideoListPage
                videoData={videoData}
                filterFunction={filterVideos}
              />
            }
          />
          <Route
            path="/video/:title"
            element={<VideoPlay videoData={videoData} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

function VideoListPage({ videoData, filterFunction }) {
  return (
    <div className="flex flex-wrap items-start gap-3 p-2">
      {videoData
        .filter(filterFunction) // Use the provided filter function
        .map((video, index) => (
          <Link key={index} to={`/video/${encodeURIComponent(video.title)}`}>
            <VideoCard {...video} />
          </Link>
        ))}
    </div>
  );
}

export default App;
