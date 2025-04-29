import { FC, useEffect, useState } from "react";
import PeopleCard from "../card/PeopleCard";
import apiClient from "../../../services/apiClient";
import LoadingSpinner from "../../common/LoadingSpinner";
import ErrorPage from "../../common/ErrorPage";
import { TMDB_IMAGE_SIZES } from "../../../constants/api.constants";
export interface PeopleKnownByProps {
  id: number;
  media_type: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  title: string;
  vote_average: number;
  vote_count: number;
}

export interface PeopleGridProps {
  id: number;
  name: string;
  profile_path: string;
  known_for: PeopleKnownByProps[];
  popularity: number;
  adult: boolean;
  gender: number;
  original_name: string;
  known_for_department: string;
}

const PeopleGrid: FC = () => {
  const [people, setPeople] = useState<PeopleGridProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPeople = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const response = await apiClient.get("person/popular");
        console.log(response.data.results);

        setPeople(response.data.results);
      } catch (err) {
        console.error("Error fetching people:", err);
        setError(err instanceof Error ? err.message : "Failed to fetch people");
      } finally {
        setIsLoading(false);
      }
    };

    fetchPeople();
  }, []);
  if (error) {
    return <ErrorPage errorType="404" message={error} />;
  }
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

  if (!people.length) {
    return <ErrorPage errorType="generic" message="No people found" />;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-6">
      {people.map((person) => (
        <PeopleCard key={person.id} poeple={person} />
      ))}
    </div>
  );
};

export default PeopleGrid;
