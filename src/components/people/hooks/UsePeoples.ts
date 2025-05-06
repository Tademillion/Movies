import { PeopleGridProps } from "../../../types/api.types";
import UseData from "../../UseData";

const UsePeoples =()=> UseData<PeopleGridProps>("person/popular");

 export default UsePeoples
