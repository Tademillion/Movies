import { PeopleGridProps } from "../../../types/api.types";
import UseGenericMovies from "../../movies/Hooks/UseGenericMovies";
 import UseData from "../../UseData";
const endpoint="person/popular"
const UsePeoples =()=> UseGenericMovies<PeopleGridProps>("person/popular",{},{params:{}});

 export default UsePeoples
