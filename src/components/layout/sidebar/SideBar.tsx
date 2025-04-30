import { useState } from "react";
import ErrorPage from "../../common/ErrorPage";
import LoadingSpinner from "../../common/LoadingSpinner";
import Genras from "./genras";
interface Props {
  handelCheck: (genre_id: number) => void;
  handelChecks: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
const SideBar = ({ handelCheck }: Props) => {
  const { error, genre, isLoading } = Genras();
  {
    isLoading && <LoadingSpinner />;
  }
  {
    error && <ErrorPage />;
  }

  const handelChecks = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
  };
  return (
    <div>
      <aside className="top-15 sticky w-64 h-auto p-6 bg-gradient-to-b from-indigo-900/90 via-purple-900/90 to-pink-900/90 backdrop-blur-sm border-r border-white/10">
        <div className="space-y-8">
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white">Filters</h3>

            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-white/80">
                Categories
              </h4>
              <div className="space-y-3">
                {["Movies", "People"].map((category) => (
                  <label
                    key={category}
                    className="flex items-center space-x-3 group"
                  >
                    <input
                      type="radio"
                      name="category"
                      value={category}
                      className="form-radio h-5 w-5 border-white/30 bg-white/10 text-indigo-400 focus:ring-indigo-400 focus:ring-offset-0"
                      onChange={(e) => {
                        handelChecks(e);
                      }}
                    />
                    <span className="text-sm text-white/90 group-hover:text-white transition-colors">
                      {category}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-white/80">
                {" "}
                Movies By Genres
              </h4>
              <div className="space-y-3">
                {genre.slice(0, 5).map((genres) => (
                  <label
                    key={genres.id}
                    className="flex items-center space-x-3 group"
                  >
                    <input
                      type="checkbox"
                      className="form-checkbox h-5 w-5 rounded border-white/30 bg-white/10 text-indigo-400 focus:ring-indigo-400 focus:ring-offset-0"
                      onChange={() => {
                        handelCheck(genres.id);
                      }}
                    />
                    <span className="text-sm text-white/90 group-hover:text-white transition-colors">
                      {genres.name}
                    </span>
                  </label>
                ))}
                {/* {["Action", "Comedy", "Drama", "Horror", "Sci-Fi"].map(
                  (genre) => (
                    <label
                      key={genre}
                      className="flex items-center space-x-3 group"
                    >
                      <input
                        type="checkbox"
                        className="form-checkbox h-5 w-5 rounded border-white/30 bg-white/10 text-indigo-400 focus:ring-indigo-400 focus:ring-offset-0"
                      />
                      <span className="text-sm text-white/90 group-hover:text-white transition-colors">
                        {genre}
                      </span>
                    </label>
                  )
                )} */}
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-white/80">
                People Filters
              </h4>
              <div className="space-y-3">
                {["Actors", "Directors", "Writers", "Producers"].map((role) => (
                  <label
                    key={role}
                    className="flex items-center space-x-3 group"
                  >
                    <input
                      type="checkbox"
                      className="form-checkbox h-5 w-5 rounded border-white/30 bg-white/10 text-indigo-400 focus:ring-indigo-400 focus:ring-offset-0"
                    />
                    <span className="text-sm text-white/90 group-hover:text-white transition-colors">
                      {role}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-white/80">Sort By</h4>
              <div className="space-y-3">
                {["Popularity", "Rating", "Release Date", "Title", "Name"].map(
                  (sort) => (
                    <label
                      key={sort}
                      className="flex items-center space-x-3 group"
                    >
                      <input
                        type="radio"
                        name="sort"
                        className="form-radio h-5 w-5 border-white/30 bg-white/10 text-indigo-400 focus:ring-indigo-400 focus:ring-offset-0"
                      />
                      <span className="text-sm text-white/90 group-hover:text-white transition-colors">
                        {sort}
                      </span>
                    </label>
                  )
                )}
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Quick Links</h3>
            <div className="space-y-2">
              <a
                href="/top250"
                className="block text-sm text-white/80 hover:text-white transition-colors py-2 px-3 rounded-lg hover:bg-white/10"
              >
                Top 250 Movies
              </a>
              <a
                href="/trending"
                className="block text-sm text-white/80 hover:text-white transition-colors py-2 px-3 rounded-lg hover:bg-white/10"
              >
                Trending Now
              </a>
              <a
                href="/upcoming"
                className="block text-sm text-white/80 hover:text-white transition-colors py-2 px-3 rounded-lg hover:bg-white/10"
              >
                Upcoming Releases
              </a>
              <a
                href="/popular-people"
                className="block text-sm text-white/80 hover:text-white transition-colors py-2 px-3 rounded-lg hover:bg-white/10"
              >
                Popular People
              </a>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default SideBar;
