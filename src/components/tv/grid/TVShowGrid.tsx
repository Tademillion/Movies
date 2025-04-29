import { FC, useEffect, useState } from "react";
import TVShowCard from "../card/TVShowCard";
import apiClient from "../../../services/apiClient";
import LoadingSpinner from "../../common/LoadingSpinner";
import ErrorPage from "../../common/ErrorPage";
import { TVShow } from "../../../types/api.types";

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
        <TVShowCard Tv={show} key={show.id} />
      ))}
    </div>
  );
};

export default TVShowGrid;
