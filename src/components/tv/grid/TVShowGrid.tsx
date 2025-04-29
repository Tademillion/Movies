import { FC, useEffect, useState } from "react";
import TVShowCard from "../card/TVShowCard";
import apiClient from "../../../services/apiClient";
import LoadingSpinner from "../../common/LoadingSpinner";
import ErrorPage from "../../common/ErrorPage";

interface TVShow {
  id: number;
  name: string;
  poster_path: string;
  vote_average: number;
  first_air_date: string;
  overview: string;
}

const TVShowGrid = () => {
  const [tvShows, setTVShows] = useState<TVShow[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setIsLoading(true);
    apiClient
      .get("tv/popular")
      .then((response) => {
        console.log(response.data.results);
        setTVShows(response.data.results);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <ErrorPage errorType="network" message={error} />;
  }

  if (!tvShows.length) {
    return <ErrorPage errorType="generic" message="No TV shows found" />;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-6">
      {tvShows.map((show) => (
        <TVShowCard
          key={show.id}
          id={show.id}
          name={show.name}
          poster_path={show.poster_path}
          vote_average={show.vote_average}
          first_air_date={show.first_air_date}
          overview={show.overview}
        />
      ))}
    </div>
  );
};

export default TVShowGrid;
