import { useEffect, useState } from "react";
import { FetchTvShowsRespone, TVShow } from "../../../types/api.types";
import apiClient from "../../../services/apiClient";

const UseTvShows=()=>{
    const [tvShows, setTVShows] = useState<TVShow[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    useEffect(() => {
      setIsLoading(true);
      apiClient
        .get<FetchTvShowsRespone>("tv/popular")
        .then((response) => {
          setTVShows(response.data.results);
          setIsLoading(false);
        })
        .catch((error) => {
          setError(error);
        });
    }, []);
     return {tvShows,isLoading,error}
}
 export default UseTvShows;
//   custom hooks are services