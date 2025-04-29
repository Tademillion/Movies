import React from "react";

const SideBar = () => {
  return (
    <div>
      <aside className="top-15 sticky w-64 h-screen p-6 bg-gradient-to-b from-indigo-900/90 via-purple-900/90 to-pink-900/90 backdrop-blur-sm border-r border-white/10">
        <div className="space-y-8">
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white">Filters</h3>

            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-white/80">Genres</h4>
              <div className="space-y-3">
                {["Action", "Comedy", "Drama", "Horror", "Sci-Fi"].map(
                  (genre) => (
                    <label key={genre} className="flex items-center space-x-3 group">
                      <input
                        type="checkbox"
                        className="form-checkbox h-5 w-5 rounded border-white/30 bg-white/10 text-indigo-400 focus:ring-indigo-400 focus:ring-offset-0"
                      />
                      <span className="text-sm text-white/90 group-hover:text-white transition-colors">{genre}</span>
                    </label>
                  )
                )}
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-white/80">Sort By</h4>
              <div className="space-y-3">
                {["Popularity", "Rating", "Release Date", "Title"].map(
                  (sort) => (
                    <label key={sort} className="flex items-center space-x-3 group">
                      <input
                        type="radio"
                        name="sort"
                        className="form-radio h-5 w-5 border-white/30 bg-white/10 text-indigo-400 focus:ring-indigo-400 focus:ring-offset-0"
                      />
                      <span className="text-sm text-white/90 group-hover:text-white transition-colors">{sort}</span>
                    </label>
                  )
                )}
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Quick Links</h3>
            <div className="space-y-2">
              <a href="/top250" className="block text-sm text-white/80 hover:text-white transition-colors py-2 px-3 rounded-lg hover:bg-white/10">
                Top 250 Movies
              </a>
              <a href="/trending" className="block text-sm text-white/80 hover:text-white transition-colors py-2 px-3 rounded-lg hover:bg-white/10">
                Trending Now
              </a>
              <a href="/upcoming" className="block text-sm text-white/80 hover:text-white transition-colors py-2 px-3 rounded-lg hover:bg-white/10">
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
