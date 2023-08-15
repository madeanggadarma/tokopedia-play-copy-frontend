// Navbar.jsx
import { useState } from "react";
import PropTypes from "prop-types";

const Navbar = ({ onSearch, onTagFilter }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTag, setActiveTag] = useState("");

  const handleSearchChange = (event) => {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm);
    onSearch(newSearchTerm);
  };

  const handleTagFilter = (tag) => {
    setActiveTag(tag === "activeTag" ? "All" : tag);
    onTagFilter(tag);
  };

  return (
    <nav className="bg-gray-900 py-4 px-4 text-white sticky top-0 z-10">
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Tokopedia Play Clone</h1>
        <div className="flex mt-0 h-9 rounded-lg focus-within:shadow-lg bg-gray-400 overflow-hidden">
          <div className="grid place-items-center h-full w-12 text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="p-2 bg-gray-400 placeholder-gray-500 text-white-100 focus:outline-none"
          />
        </div>
      </div>
      <div className="flex gap-2 mt-6">
        <button
          onClick={() => handleTagFilter("")}
          className={`${
            activeTag === ""
              ? "bg-green-300 bg-opacity-25 text-green-500 font-semibold py-2 px-4 border border-green-500 rounded-lg"
              : "bg-transparent border border-white hover:bg-green-300 hover:bg-opacity-25 rounded-lg py-2 px-4"
          } hover:bg-green-300 hover:bg-opacity-25 text-white font-semibold py-1 px-3 rounded mt-2`}
        >
          Live
        </button>
        <button
          onClick={() => handleTagFilter("Promo")}
          className={`${
            activeTag === "Promo"
              ? "bg-green-300 bg-opacity-25 text-green-500 font-semibold py-2 px-4 border border-green-500 rounded-lg"
              : "bg-transparent border border-white hover:bg-green-300 hover:bg-opacity-25 rounded-lg py-2 px-4"
          } hover:bg-green-300 hover:bg-opacity-25 text-white font-semibold py-1 px-3 rounded mt-2`}
        >
          Promo
        </button>
        <button
          onClick={() => handleTagFilter("Big Sales")}
          className={`${
            activeTag === "Big Sales"
              ? "bg-green-300 bg-opacity-25 text-green-500 font-semibold py-2 px-4 border border-green-500 rounded-lg"
              : "bg-transparent border border-white hover:bg-green-300 hover:bg-opacity-25 rounded-lg py-2 px-4"
          } hover:bg-green-300 hover:bg-opacity-25 text-white font-semibold py-1 px-3 rounded mt-2`}
        >
          Big Sales
        </button>
        <button
          onClick={() => handleTagFilter("Official Store")}
          className={`${
            activeTag === "Official Store"
              ? "bg-green-300 bg-opacity-25 text-green-500 font-semibold py-2 px-4 border border-green-500 rounded-lg"
              : "bg-transparent border border-white hover:bg-green-300 hover:bg-opacity-25 rounded-lg py-2 px-4"
          } hover:bg-green-300 hover:bg-opacity-25 text-white font-semibold py-1 px-3 rounded mt-2`}
        >
          Official Store
        </button>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  onSearch: PropTypes.func.isRequired,
  onTagFilter: PropTypes.func.isRequired,
};

export default Navbar;
