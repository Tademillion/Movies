import { useState } from "react";
import React from "react";
// import { MovieCardGrid } from "./components/movies/card";
import { Movie } from "./types/api.types";
import MovieCard from "./components/movies/card/MovieCard";
import SideBar from "./components/layout/sidebar/SideBar";
import Navbar from "./components/layout/navbar/Navbar";

function App() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  const handleMovieClick = (movie: Movie) => {
    console.log("Movie clicked:", movie);
  };
  return (
    <div className="min-h-screen ">
      <Navbar />

      {/* Main Content */}
      <div className="flex">
        {/* Sidebar */}
        <SideBar />
        {/* Main Content Area */}
        <main className="flex-1 p-6 mt-20 mx-5 bg-gray-800 ">
          <div className="container mx-auto">
            <h1 className="text-3xl font-bold text-white mb-6">
              Popular Movies
            </h1>

            <div className="mb-8 ">
              <MovieCard />
            </div>

            <div className="flex justify-center items-center space-x-4 ">
              <button className="px-4 py-2 bg-gray-800 text-white rounded-lg">
                Previous
              </button>
              <span className="text-gray-300">Page 1 of 10</span>
              <button className="px-4 py-2 bg-gray-800 text-white rounded-lg ">
                Next
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
