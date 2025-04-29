import { FC, useEffect, useState } from 'react';
import TVShowCard from '../card/TVShowCard';
import apiClient from '../../../services/apiClient';
import LoadingSpinner from '../../common/LoadingSpinner';
import ErrorPage from '../../common/ErrorPage';

interface TVShow {
  id: number;
  name: string;
  poster_path: string;
  vote_average: number;
  first_air_date: string;
  overview: string;
}

const TVShowGrid: FC = () => {
  const [tvShows, setTVShows] = useState<TVShow[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTVShows = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const response = await apiClient.get('tv/popular');
        setTVShows(response.data.results);
      } catch (err) {
        console.error('Error fetching TV shows:', err);
        setError(err instanceof Error ? err.message : 'Failed to fetch TV shows');
      } finally {
        setIsLoading(false);
      }
    };

    fetchTVShows();
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
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
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