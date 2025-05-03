import MovieCardGrid from "./card/MovieCardGrid";

export interface GenreProps {
  genre_id: number | null;
  sortedBy: string | null;
}
const MoviesPage = ({ genre_id, sortedBy }: GenreProps) => {
  console.log(sortedBy);
  return (
    <>
      <h1 className="text-4xl font-bold text-white mb-8">Popular Movies</h1>
      <div>
        <MovieCardGrid sortedBy={sortedBy} genre_id={genre_id} />
      </div>
      <div className="flex justify-center items-center space-x-4 mt-5">
        <button className="px-6 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors duration-300">
          Previous
        </button>
        <span className="text-white/80">Page 1 of 10</span>
        <button className="px-6 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors duration-300">
          Next
        </button>
      </div>
    </>
  );
};

export default MoviesPage;
