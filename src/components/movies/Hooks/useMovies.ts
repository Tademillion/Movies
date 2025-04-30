import { useEffect, useState } from "react";
import { FetchMovieRespone, Movie } from "../../../types/api.types";
import apiClient from "../../../services/apiClient";
import { GenreProps } from "../MoviesPage";

const UseMovies=( {genre_id} : GenreProps)=>{
    const [movies, setMovies] = useState<Movie[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [Error, setError] = useState<string | null>(null);

    useEffect(() => {
      setIsLoading(true);
      apiClient
        .get<FetchMovieRespone>("/discover/movie",{params:{with_genres:genre_id}})
        .then((response) => {
           console.log(response.request)
          setMovies(response.data.results);
          console.log(response.data.results);
          setIsLoading(false);
        })
        .catch((error) => {
          setError(error);
          setIsLoading(false);
        });
    }, [genre_id]);
     return {movies,isLoading,Error}
}
 export  default UseMovies;