import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ErrorPage from "./components/common/ErrorPage";
import Footer from "./components/layout/footer/Footer";
import Navbar from "./components/layout/navbar/Navbar";
import SideBar from "./components/layout/sidebar/SideBar";
import ListsPage from "./components/lists/ListsPage";
import MoviesPage from "./components/movies/MoviesPage";
import PeopleGrid from "./components/people/grid/PeopleGrid";
import TVShowsPage from "./components/tv/TVShowsPage";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <Navbar />

        {/* Main Content */}
        <div className="flex bg-black">
          {/* Sidebar */}
          <SideBar />
          <main className="flex-1 p-8 mt-20 mx-5 bg-red bg-white/5 backdrop-blur-sm rounded-xl shadow-2xl border border-white/10">
            <div className="container mx-auto">
              <Routes>
                <Route path="/" element={<MoviesPage />} />
                <Route path="/movies" element={<MoviesPage />} />
                <Route path="/people" element={<PeopleGrid />} />
                <Route path="/tv-shows" element={<TVShowsPage />} />
                <Route path="/lists" element={<ListsPage />} />
                <Route path="*" element={<ErrorPage errorType="404" />} />
              </Routes>
            </div>
          </main>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
