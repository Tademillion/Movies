import React, { useEffect, useState } from "react";
import { Movie } from "../../../types/api.types";
import MovieCard from "./MovieCard";
import LoadingSpinner from "../../common/LoadingSpinner";
import apiClient from "../../../services/apiClient";

const MovieCardGrid: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setIsLoading(true);
    apiClient
      .get("/discover/movie")
      .then((response) => {
        setMovies(response.data.results);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);
  if (isLoading) {
    return <LoadingSpinner />;
  }
  if (error) {
    return (
      <div className="text-center py-8">
        <p className="text-red-500">{error}</p>
        <button
          onClick={() => window.location.reload()}
          className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
        >
          Try Again
        </button>
      </div>
    );
  }
  if (movies.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-400">No movies found.</p>
      </div>
    );
  }
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieCardGrid;
