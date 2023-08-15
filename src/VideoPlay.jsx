import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";

// VideoPlay.jsx

const VideoPlay = () => {
  const { id } = useParams();
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [products, setProducts] = useState([]);
  const [comments, setComments] = useState([]);
  const [commentUsername, setCommentUsername] = useState("");
  const [commentText, setCommentText] = useState("");
  const [videoNotFound, setVideoNotFound] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchSelectedVideo = async () => {
      try {
        const videoResponse = await axios.get(
          `http://localhost:3000/videos/${id}`
        );
        if (videoResponse.data.video) {
          setSelectedVideo(videoResponse.data.video);
          const productsResponse = await axios.get(
            `http://localhost:3000/videos/products/${id}`
          );
          setProducts(productsResponse.data.products);

          // Fetch comments based on video ID
          const commentsResponse = await axios.get(
            `http://localhost:3000/videos/comments/${id}`
          );
          setComments(commentsResponse.data.comments);
        } else {
          setVideoNotFound(true);
        }
        setIsLoading(false); // Set loading status to false
      } catch (error) {
        console.error("Error fetching selected video data:", error);
        setIsLoading(false); // Set loading status to false even if there's an error
      }
    };

    fetchSelectedVideo();
  }, [id]);

  const handlePostComment = async () => {
    try {
      if (commentUsername && commentText) {
        const response = await axios.post(
          `http://localhost:3000/videos/comment/${id}`,
          {
            username: commentUsername,
            comment: commentText,
          }
        );
        console.log("Comment posted:", response.data);

        // Refresh the comments after posting
        const commentsResponse = await axios.get(
          `http://localhost:3000/videos/comments/${id}`
        );
        setComments(commentsResponse.data.comments);

        // Clear the input fields
        setCommentUsername("");
        setCommentText("");
      } else {
        console.error("Please fill in both username and comment.");
      }
    } catch (error) {
      console.error("Error posting comment:", error);
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
        <div className="flex flex-row text-3xl">Loading...</div>
      </div>
    );
  }

  if (videoNotFound) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
        <div className="flex flex-row text-3xl">Video Not Found.</div>
      </div>
    );
  }

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
        <div className="flex flex-row max-w-screen-lg mx-auto justify-center">
          {/* Product Details */}
          <div className="flex flex-col items-center justify-center bg-gray-700 text-white p-8 rounded-l-lg shadow-lg flex-1">
            {products.length > 0 ? (
              products.map((product) => (
                <a
                  key={product._id}
                  href={product.productUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-200 sm rounded px-6 py-4 mb-5 text-sm font-semibold text-gray-700 block"
                  style={{
                    maxWidth: "300px",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  <h3 className="text-xl font-semibold mb-2">
                    {product.productName}
                  </h3>
                  <p>Price: {product.price}</p>
                  <p>Qty: {product.qty}</p>
                  {/* You can add more information here as needed */}
                </a>
              ))
            ) : (
              <div className="bg-gray-200 sm rounded px-6 py-4 mb-5 text-sm font-semibold text-gray-700 block">
                No products found.
              </div>
            )}
          </div>

          {/* Video Details */}
          <div className="flex flex-col items-center bg-gray-800 text-white p-4 shadow-lg flex-1">
            <h2 className="text-2xl font-semibold my-5">
              {selectedVideo.videoTitle}
            </h2>
            <div className="w-full mb-4">
              <ReactPlayer
                url={selectedVideo.videoUrl}
                controls
                height="450px"
                width="800px"
              />
            </div>
          </div>
          {/* Comments */}
          <div className="flex flex-col justify-between bg-gray-700 text-white p-8 rounded-r-lg shadow-lg flex-1">
            <div className="mb-4 pr-20 max-h-80 overflow-y-auto">
              <h3 className="text-xl font-semibold mb-2">Comments</h3>
              {/* Add code to display the list of comments here */}
              {comments && comments.length > 0 ? (
                comments.map((comment) => (
                  <div key={comment._id} className="mb-2">
                    <p className="font-bold">{comment.username}</p>
                    <p className="font-thin">{comment.comment}</p>
                  </div>
                ))
              ) : (
                <p>No comment yet</p>
              )}
              {/* ... Add more comments here */}
            </div>

            {/* Comment Input */}
            <div>
              <h3 className="text-xl font-semibold mb-2 items-end">
                Add a Comment
              </h3>
              {/* Add code for comment input form here */}
              <input
                type="text"
                value={commentUsername}
                className="bg-gray-800 text-gray-300 py-2 pl-4 pr-8 rounded mb-2"
                placeholder="username"
                onChange={(e) => setCommentUsername(e.target.value)}
              />
              <textarea
                value={commentText}
                className="bg-gray-800 text-gray-300 py-2 pl-4 pr-8 rounded mb-2 w-full"
                placeholder="Type your comment..."
                onChange={(e) => setCommentText(e.target.value)}
              ></textarea>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                onClick={handlePostComment}
              >
                Post Comment
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoPlay;
