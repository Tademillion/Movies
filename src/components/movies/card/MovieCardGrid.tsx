import { useEffect, useState } from "react";
import apiClient from "../../../services/apiClient";
import { FetchMovieRespone, Movie } from "../../../types/api.types";
import LoadingSpinner from "../../common/LoadingSpinner";
import MovieCard from "./MovieCard";
import UseMovies from "../Hooks/useMovies";

const MovieCardGrid = () => {
  const { Error, movies, isLoading } = UseMovies();

  if (isLoading) {
    return <LoadingSpinner />;
  }
  if (Error) {
    return (
      <div className="text-center py-8">
        <p className="text-red-500">{Error}</p>
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
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieCardGrid;
