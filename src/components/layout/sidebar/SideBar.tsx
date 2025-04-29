import React from "react";

const SideBar = () => {
  return (
    <div>
      <aside className="top-15 sticky w-64 bg-red-800 h-screen p-4">
        <div className="space-y-6">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Filters</h3>

            <div className="space-y-2">
              <h4 className="text-sm font-medium text-gray-400">Genres</h4>
              <div className="space-y-2">
                {["Action", "Comedy", "Drama", "Horror", "Sci-Fi"].map(
                  (genre) => (
                    <label key={genre} className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        className="form-checkbox h-4 w-4 text-blue-500 rounded border-gray-600 bg-gray-700"
                      />
                      <span className="text-sm text-gray-300">{genre}</span>
                    </label>
                  )
                )}
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="text-sm font-medium text-gray-400">Sort By</h4>
              <div className="space-y-2">
                {["Popularity", "Rating", "Release Date", "Title"].map(
                  (sort) => (
                    <label key={sort} className="flex items-center space-x-2">
                      <input
                        type="radio"
                        name="sort"
                        className="form-radio h-4 w-4 text-blue-500 border-gray-600 bg-gray-700"
                      />
                      <span className="text-sm text-gray-300">{sort}</span>
                    </label>
                  )
                )}
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <div className="space-y-1">
              <a href="/top250" className="block text-sm text-gray-300 ">
                Top 250 Movies
              </a>
              <a href="/trending" className="block text-sm text-gray-300 ">
                Trending Now
              </a>
              <a href="/upcoming" className="block text-sm text-gray-300 ">
                Upcoming Releases
              </a>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default SideBar;
