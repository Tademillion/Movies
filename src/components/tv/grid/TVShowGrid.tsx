import ErrorPage from "../../common/ErrorPage";
import LoadingSpinner from "../../common/LoadingSpinner";
import TVShowCard from "../card/TVShowCard";
import UseTvShowsGeneric from "../hooks/UseTvShowsgeneric";
import { TvshowsEndpointProps } from "../TVShowsPage";

const TVShowGrid = (endpoint: TvshowsEndpointProps) => {
  // const { error, isLoading, tvShows } = UseTvShows(endpoint);
  const { data: tvShows, error, isLoading } = UseTvShowsGeneric(endpoint);
  if (isLoading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  }
  if (error) {
    console.log(error);
    return <ErrorPage errorType={error} />;
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
