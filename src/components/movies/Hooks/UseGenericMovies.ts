import { useEffect, useState } from "react";
import { FetchMovieRespone, Movie } from "../../../types/api.types";
import apiClient from "../../../services/apiClient";
import { GenreProps } from "../MoviesPage";
import { AxiosRequestConfig } from "axios";

const UseGenericMovies=({genre_id,sortedBy}: GenreProps,requestConfig?:AxiosRequestConfig,Deps?:any[])=>{
const [movies, setMovies] = useState<Movie[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [Error, setError] = useState<string | null>(null);
    const    getSortedResults=(data:   Movie[] , sortedBy: string | null): Movie[]=> {
        if (!data || !data || !Array.isArray(data) || !sortedBy) {
          return data || []; // Or handle as needed
        }
      
        return [...data].sort((a, b) => {
          if (a[sortedBy] < b[sortedBy]) {
            return -1;
          }
          if (a[sortedBy] > b[sortedBy]) {
            return 1;
          }
          return 0;
        });
      }
    useEffect(() => {
        setIsLoading(true);
        apiClient
          .get<FetchMovieRespone>("/discover/movie",{...requestConfig})
          .then((response) => {
            setMovies(getSortedResults(response.data.results,sortedBy));
            setIsLoading(false);
          })
          .catch((error) => {
            setError(error);
            setIsLoading(false);
          });
      }, Deps?[...Deps]: []);
       return {movies,isLoading,Error}

}
 export default UseGenericMovies