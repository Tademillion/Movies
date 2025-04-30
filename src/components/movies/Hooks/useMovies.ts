import { useEffect, useState } from "react";
import { FetchMovieRespone, Movie } from "../../../types/api.types";
import apiClient from "../../../services/apiClient";

const UseMovies=()=>{
    const [movies, setMovies] = useState<Movie[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [Error, setError] = useState<string | null>(null);
    useEffect(() => {
      setIsLoading(true);
      apiClient
        .get<FetchMovieRespone>("/discover/movie")
        .then((response) => {
          setMovies(response.data.results);
          // console.log(response.data);
          setIsLoading(false);
        })
        .catch((error) => {
          setError(error);
          setIsLoading(false);
        });
    }, []);
     return {movies,isLoading,Error}
}
 export  default UseMovies;