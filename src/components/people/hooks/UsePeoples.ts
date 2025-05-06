import { useEffect, useState } from "react";
import { FetchPeopleRespone, PeopleGridProps } from "../../../types/api.types";
import apiClient from "../../../services/apiClient";

const UsePeoples =()=>{

   const [people, setPeople] = useState<PeopleGridProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setIsLoading(true);
    apiClient
      .get<FetchPeopleRespone>("person/popular")
      .then((Response) => {
        // console.log(Response.data.results);
        setPeople(Response.data.results);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);
     return {people,isLoading,error};
}
 export default UsePeoples
