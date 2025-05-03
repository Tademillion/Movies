import { FC, useEffect, useState } from "react";
import apiClient from "../../../services/apiClient";
import ErrorPage from "../../common/ErrorPage";
import LoadingSpinner from "../../common/LoadingSpinner";
import PeopleCard from "../card/PeopleCard";
import { FetchPeopleRespone, PeopleGridProps } from "../../../types/api.types";

const PeopleGrid: FC = () => {
  const [people, setPeople] = useState<PeopleGridProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setIsLoading(true);
    apiClient
      .get<FetchPeopleRespone>("person/popular")
      .then((Response) => {
        console.log(Response.data.results);
        setPeople(Response.data.results);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
      });
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
    <>
      <p className="text-white text-lg max-w-2xl text-center mb-10">
        Discover and explore the most popular actors, directors, writers, and
        producers in the entertainment industry.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-6">
        {people.map((person) => (
          <PeopleCard key={person.id} poeple={person} />
        ))}
      </div>
    </>
  );
};
export default PeopleGrid;
