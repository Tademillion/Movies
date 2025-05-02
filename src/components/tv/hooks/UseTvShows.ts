import { useEffect, useState } from "react";
import { FetchTvShowsRespone, TVShow } from "../../../types/api.types";
import apiClient from "../../../services/apiClient";
import { TvshowsEndpointProps } from "../TVShowsPage";
import { TMDB_ENDPOINTS_TV } from "../../../constants/api.constants";
import tvShowapiClient from "../../../services/tvShowapiClient";

const UseTvShows=({endpoint}:TvshowsEndpointProps)=>{
    const [tvShows, setTVShows] = useState<TVShow[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    //  console.log("usetv shows",endpoint)
    useEffect(() => {
      
      setIsLoading(true);
      tvShowapiClient
        .get<FetchTvShowsRespone>(endpoint?endpoint:"popular")
        .then((response) => {
         
          setTVShows(response.data.results);
       
          setIsLoading(false);
         
        })
        .catch((error) => {
          setError(error);
        });
    }, [endpoint]);
     return {tvShows,isLoading,error}
}
 export default UseTvShows;
//   custom hooks are services