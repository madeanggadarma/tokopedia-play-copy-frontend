import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const VideoCard = ({ _id, videoTitle, videoThumbnail, videoCategory }) => (
  <Link
    to={`/video/${_id}`}
    className="max-w-sm rounded overflow-hidden shadow-lg w-60 h-[28rem] mb-2 relative cursor-pointer"
  >
    <img
      className="w-full h-full object-cover absolute top-0 left-0"
      src={videoThumbnail}
      alt="Video thumbnail"
    />
    <div className="bg-red-500 text-white text-xs font-bold p-1 ml-2 mt-3 absolute top-0 left-0 rounded">
      LIVE
    </div>
    <div className="relative h-full">
      <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black to-transparent text-white">
        <div className="text-white font-bold ">
          {videoTitle}
          {/* <p className="text-white-700 font-normal text-base">{description}</p> */}
          {videoCategory.map((tag, index) => (
            <span
              key={index}
              className="inline-block bg-gray-200 rounded-full px-3 py-1 mb-2 text-sm font-semibold text-gray-700 mr-2"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  </Link>
);

VideoCard.propTypes = {
  _id: PropTypes.string.isRequired,
  videoTitle: PropTypes.string.isRequired,
  videoThumbnail: PropTypes.string.isRequired,
  videoCategory: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default VideoCard;
