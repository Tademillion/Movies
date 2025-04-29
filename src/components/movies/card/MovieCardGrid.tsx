// import React, { useEffect, useState } from "react";
// import { Movie } from "../../../types/api.types";
// import MovieCard from "./MovieCard";
// import MovieCardSkeleton from "./MovieCardSkeleton";
// import apiClient from "../../../services/apiClient";

// interface MovieCardGridProps {
//   movies: Movie[];
//   isLoading?: boolean;
//   onMovieClick?: (movie: Movie) => void;
// }

// const MovieCardGrid: React.FC<MovieCardGridProps> = ({ movies,isLoading:false, onMovieClick }) => {
// const [movies, setMovies] = useState<Movie[]>([]);
// const [isLoading, setIsLoading] = useState(false);
//   if (isLoading) {
//     return (
//       <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
//         {[...Array(12)].map((_, index) => (
//           <MovieCardSkeleton key={index} />
//         ))}
//       </div>
//     );
//   }

// useEffect(() => {
//   const getMovies = async () => {
//     try {
//       const response = await apiClient.get("/discover/movie");
//       // setMovies(response.data.results);
//       setMovies(response.data.results);
//       console.log(response.data.results);
//     } catch (error) {
//       console.error("Error fetching movies:", error);
//     }
//   };
//   getMovies();
// }, []);
//   if (isLoading) {
//     return (
//       <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
//         {[...Array(12)].map((_, index) => (
//           <MovieCardSkeleton key={index} />
//         ))}
//       </div>
//     );
//   }

//   function onMovieClick(movie: Movie): void {
//     throw new Error("Function not implemented.");
//   }

//   return (
//     <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
//       {movies.map((movie) => (
//         <MovieCard
//           key={movie.id}
//           movie={movie}
//           onClick={() => onMovieClick?.(movie)}
//         />
//       ))}
//     </div>
//   );
// };

// export default MovieCardGrid;
