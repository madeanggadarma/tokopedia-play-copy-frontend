import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import VideoListPage from "./VideoListPage";
import VideoPlay from "./VideoPlay";
import "./App.css";

// const videoData = [
//   {
//     urlVideo: "https://youtu.be/L93hyPiltLA",
//     title: "Video Title 1",
//     description: "Lorem ipsum dolor sit amet...",
//     thumbnail:
//       "https://images.pexels.com/photos/735423/pexels-photo-735423.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     products: ["product1", "product2", "product3"],
//     tags: ["#tag1", "#tag2", "#tag3"],
//   },
//   {
//     urlVideo: "https://www.youtube.com/watch?v=FR91CB5SBWU&ab_channel=kobasolo",
//     title: "Video Title 2",
//     description: "Another video description...",
//     thumbnail:
//       "https://images.pexels.com/photos/10429081/pexels-photo-10429081.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     products: ["product1", "product2", "product3", "product4"],
//     tags: ["#tag2", "#tag3"],
//   },
//   {
//     urlVideo:
//       "https://www.youtube.com/watch?v=KTZ-y85Erus&ab_channel=%E3%83%A8%E3%83%AB%E3%82%B7%E3%82%AB%2Fn-bunaOfficial",
//     title: "Video Title 3",
//     description: "Another video description...",
//     thumbnail:
//       "https://images.pexels.com/photos/1784578/pexels-photo-1784578.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     products: ["product1", "product2"],
//     tags: ["#tag1", "#tag3"],
//   },
//   {
//     urlVideo:
//       "https://www.youtube.com/watch?v=F64yFFnZfkI&ab_channel=%E3%83%A8%E3%83%AB%E3%82%B7%E3%82%AB%2Fn-bunaOfficial",
//     title: "Video Title 4",
//     description: "Another video description...",
//     thumbnail:
//       "https://images.pexels.com/photos/10430429/pexels-photo-10430429.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
//     products: ["product1", "product2", "product3"],
//     tags: ["#tag1", "#tag2", "#tag3", "#tag4"],
//   },
//   {
//     urlVideo:
//       "https://www.youtube.com/watch?v=0v447Tvmp2E&ab_channel=SuzukiSaint-Topic",
//     title: "Video Title 5",
//     description: "Lorem ipsum dolor sit amet...",
//     thumbnail:
//       "https://images.pexels.com/photos/13294541/pexels-photo-13294541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     products: ["product1", "product2"],
//     tags: ["#tag1", "#tag2", "#tag3"],
//   },
//   {
//     title: "Video Title 6",
//     description: "Another video description...",
//     thumbnail:
//       "https://images.pexels.com/photos/14840129/pexels-photo-14840129.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     products: ["product1"],
//     tags: ["#tag2", "#tag3"],
//   },
//   {
//     title: "Video Title 7",
//     description: "Another video description...",
//     thumbnail:
//       "https://images.pexels.com/photos/8963423/pexels-photo-8963423.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     products: ["product1", "product2", "product3"],
//     tags: ["#tag1", "#tag3"],
//   },
//   {
//     title: "Video Title 8",
//     description: "Another video description...",
//     thumbnail:
//       "https://images.pexels.com/photos/6690854/pexels-photo-6690854.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     products: ["product1", "product2", "product3", "product4"],
//     tags: ["#tag1", "#tag3"],
//   },
//   {
//     title: "Video Title 9",
//     description: "Lorem ipsum dolor sit amet...",
//     thumbnail:
//       "https://images.pexels.com/photos/8964252/pexels-photo-8964252.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     products: ["product1", "product2", "product3"],
//     tags: ["#ta2", "#tag3"],
//   },
//   {
//     title: "Video Title 10",
//     description: "Another video description...",
//     thumbnail:
//       "https://images.pexels.com/photos/6690849/pexels-photo-6690849.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
//     products: ["product1", "product2", "product3", "product4"],
//     tags: ["#tag2", "#tag3"],
//   },
//   {
//     title: "Video Title 11",
//     description: "Another video description...",
//     thumbnail:
//       "https://images.pexels.com/photos/6690846/pexels-photo-6690846.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     products: ["product1", "product2", "product3"],
//     tags: ["#tag1", "#tag10"],
//   },
//   {
//     title: "Video Title 12",
//     description: "Another video description...",
//     thumbnail:
//       "https://images.pexels.com/photos/14251577/pexels-photo-14251577.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     products: ["product1"],
//     tags: ["#tag1"],
//   },
//   {
//     title: "Video Title 13",
//     description: "Another video description...",
//     thumbnail:
//       "https://cdn.pixabay.com/photo/2023/05/01/14/26/bee-7963186_1280.jpg",
//     products: ["product1", "product2"],
//     tags: ["#tag4"],
//   },
// ];

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

// function VideoListPage({ videoData }) {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [tagFilter, setTagFilter] = useState("");

//   const handleSearch = (newSearchTerm) => {
//     setSearchTerm(newSearchTerm);
//   };

//   const handleTagFilter = (tag) => {
//     setTagFilter(tag);
//   };

//   // Define a filtering function based on the search term and tag filter
//   const filterVideos = (video) => {
//     return (
//       video.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
//       (tagFilter === "" || video.tags.includes(tagFilter))
//     );
//   };
//   return (
//     <>
//       <Navbar onSearch={handleSearch} onTagFilter={handleTagFilter} />
//       <div className="flex flex-wrap items-center gap-3 px-2">
//         {videoData
//           .filter(filterVideos) // Use the provided filter function
//           .map((video, index) => (
//             <VideoCard key={index} {...video} />
//           ))}
//       </div>
//     </>
//   );
// }

export default App;

