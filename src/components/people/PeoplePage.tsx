import { FC, useState } from "react";
import PeopleGrid from "./grid/PeopleGrid";

const PeoplePage: FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10; // This would come from your API

  // Mock data with proper image URLs
  const mockPeople = [
    {
      id: 1,
      name: "Tom Hanks",
      profilePath:
        "https://image.tmdb.org/t/p/w500/pQFoyx7rp09CJTAb932F2g8Nlho.jpg",
      knownFor: "Forrest Gump, Cast Away, Saving Private Ryan",
      popularity: 8.5,
    },
    {
      id: 2,
      name: "Meryl Streep",
      profilePath:
        "https://image.tmdb.org/t/p/w500/7pyk2xWCQgKkTZ6jO0HxQjWXHwK.jpg",
      knownFor: "The Devil Wears Prada, Mamma Mia!, Sophie's Choice",
      popularity: 8.2,
    },
    {
      id: 3,
      name: "Leonardo DiCaprio",
      profilePath:
        "https://image.tmdb.org/t/p/w500/5Brc5dLifH3suIok9BJPXxTfk9z.jpg",
      knownFor: "Titanic, Inception, The Wolf of Wall Street",
      popularity: 8.8,
    },
    {
      id: 4,
      name: "Emma Watson",
      profilePath:
        "https://image.tmdb.org/t/p/w500/7Xi7NvYhWbqHVZBi8gXQHvVXxw9.jpg",
      knownFor: "Harry Potter, Beauty and the Beast, Little Women",
      popularity: 8.0,
    },
    {
      id: 5,
      name: "Denzel Washington",
      profilePath:
        "https://image.tmdb.org/t/p/w500/khMf0LLhdKXQrBgDSS0QTSVwlIx.jpg",
      knownFor: "Training Day, The Equalizer, Malcolm X",
      popularity: 8.3,
    },
  ];

  return (
    <div className="container mx-auto">
      <div className="flex flex-col items-center mb-12">
        <h1 className="text-4xl font-bold text-white mb-4">Popular People</h1>
        <p className="text-white/70 text-lg max-w-2xl text-center">
          Discover and explore the most popular actors, directors, writers, and
          producers in the entertainment industry.
        </p>
      </div>

      <PeopleGrid />

      <div className="flex justify-center items-center space-x-4 mt-8">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-6 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Previous
        </button>
        <span className="text-white/80">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
          className="px-6 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PeoplePage;
