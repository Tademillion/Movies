import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="bg-gray-800 py-4 fixed top-0 w-full z-3 position-fixed">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <a href="/" className="text-2xl font-bold text-white">
              CineView
            </a>

            <div className="flex-1 max-w-xl mx-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search movies..."
                  //   value={searchQuery}
                  //   onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-gray-700 text-white rounded-full py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <svg
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <a href="/movies" className="text-gray-300 ">
                Movies
              </a>
              <a href="/tv" className="text-gray-300 ">
                TV Shows
              </a>
              <a href="/people" className="text-gray-300 ">
                People
              </a>
              <a href="/mylist" className="text-gray-300 ">
                My List
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
