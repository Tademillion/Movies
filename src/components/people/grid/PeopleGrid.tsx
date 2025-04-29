import { FC, useEffect, useState } from "react";
import PeopleCard from "../card/PeopleCard";
import apiClient from "../../../services/apiClient";
import LoadingSpinner from "../../common/LoadingSpinner";
import { TMDB_IMAGE_SIZES } from "../../../constants/api.constants";

export interface PeopleGridProps {
  id: number;
  name: string;
  profile_path: string;
  knownFor: string;
  popularity: number;
  adult: boolean;
  gender: number;
  original_name: string;
  known_for_department: string;
}
//

const PeopleGrid = () => {
  const [people, SetPeople] = useState<PeopleGridProps[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    setIsLoading(true);
    apiClient
      .get("person/popular")
      .then((response) => {
        console.log(response.data.results);
        SetPeople(response.data.results);
        setIsLoading(false);
        {
        }
      })
      .catch((error) => {
        setError(error);
      });
  }, []);
  {
    isLoading && <LoadingSpinner />;
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
      {people.map((person) => (
        <PeopleCard poeple={person} key={person.id} />
      ))}
    </div>
  );
};

export default PeopleGrid;
