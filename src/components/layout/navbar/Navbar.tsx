import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 py-4 fixed top-0 w-full z-50 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <a
              href="/"
              className="text-2xl font-bold text-white hover:text-indigo-200 transition-colors duration-300"
            >
              CineView
            </a>

            <div className="flex-1 max-w-xl mx-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search movies..."
                  className="w-full bg-white/20 backdrop-blur-sm text-white rounded-full py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-white/50 placeholder-white/70"
                />
                <svg
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/70"
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
              <a
                href="/movies"
                className="text-white/90 hover:text-white font-medium transition-colors duration-300"
              >
                Movies
              </a>
              <a
                href="/tv-shows"
                className="text-white/90 hover:text-white font-medium transition-colors duration-300"
              >
                TV Shows
              </a>
              <a
                href="/people"
                className="text-white/90 hover:text-white font-medium transition-colors duration-300"
              >
                People
              </a>
              <a
                href="/lists"
                className="text-white/90 hover:text-white font-medium transition-colors duration-300"
              >
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
