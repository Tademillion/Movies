import { FC } from 'react';
import PeopleCard from '../card/PeopleCard';

interface PeopleGridProps {
  people: Array<{
    id: number;
    name: string;
    profilePath: string;
    knownFor: string;
    popularity: number;
  }>;
}

const PeopleGrid: FC<PeopleGridProps> = ({ people }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
      {people.map((person) => (
        <PeopleCard
          key={person.id}
          id={person.id}
          name={person.name}
          profilePath={person.profilePath}
          knownFor={person.knownFor}
          popularity={person.popularity}
        />
      ))}
    </div>
  );
};

export default PeopleGrid; 