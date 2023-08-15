// src/VideoListPage.js
import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import VideoCard from "./VideoCard";

function VideoListPage() {
  const [videoData, setVideoData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [tagFilter, setTagFilter] = useState("");

  const handleSearch = (newSearchTerm) => {
    setSearchTerm(newSearchTerm);
  };

  const handleTagFilter = (tag) => {
    setTagFilter(tag);
  };

  useEffect(() => {
    const fetchVideoData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/videos/"); // Replace with your API endpoint
        setVideoData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching video data:", error);
      }
    };

    fetchVideoData();
  }, []);

  // Define a filtering function based on the search term and tag filter
  const filterVideos = (video) => {
    return (
      video.videoTitle.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (tagFilter === "" || video.videoCategory.includes(tagFilter))
    );
  };

  return (
    <>
      <Navbar onSearch={handleSearch} onTagFilter={handleTagFilter} />
      <div className="flex flex-wrap items-center gap-3 px-2">
        {videoData
          .filter(filterVideos) // Use the provided filter function
          .map((video, index) => (
            <VideoCard key={index} {...video} />
          ))}
      </div>
    </>
  );
}

export default VideoListPage;
