import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SideBar from "./components/layout/sidebar/SideBar";
import Navbar from "./components/layout/navbar/Navbar";
import Footer from "./components/layout/footer/Footer";
import MovieCardGrid from "./components/movies/card/MovieCardGrid";
import PeoplePage from "./components/people/PeoplePage";
import PeopleGrid from "./components/people/grid/PeopleGrid";
import ErrorPage from "./components/common/ErrorPage";

const MoviesPage = () => {
  return (
    <>
      <h1 className="text-4xl font-bold text-white mb-8">Popular Movies</h1>
      <div>
        <MovieCardGrid />
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

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <Navbar />

        {/* Main Content */}
        <div className="flex flex-1">
          {/* Sidebar */}
          <SideBar />
          {/* Main Content Area */}
          <main className="flex-1 p-8 mt-20 mx-5 bg-white/5 backdrop-blur-sm rounded-xl shadow-2xl border border-white/10">
            <div className="container mx-auto">
              <Routes>
                <Route path="/" element={<MoviesPage />} />
                <Route path="/movies" element={<MoviesPage />} />
                <Route path="/people" element={<PeopleGrid />} />
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
