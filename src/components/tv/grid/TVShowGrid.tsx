import TVShowCard from "../card/TVShowCard";
import LoadingSpinner from "../../common/LoadingSpinner";
import ErrorPage from "../../common/ErrorPage";
import UseTvShows from "../hooks/UseTvShows";
import { TvshowsEndpointProps } from "../TVShowsPage";

const TVShowGrid = () => {
  const { error, isLoading, tvShows } = UseTvShows();

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
