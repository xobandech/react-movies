import { BrowserRouter, Route, Routes } from "react-router-dom";
import MoviesProvider from "./contexts/MoviesContext";
import MoviesPage from "./pages/MoviesPage";
import HomePage from "./pages/HomePage";
import ShowsPage from "./pages/ShowsPage";
import MovieDetailsPage from "./pages/MovieDetailPage";
import Layout from "./components/Layout/Layout";
import "./App.css";
import SearchResultsPage from "./pages/SearchResultPage";

export default function App() {
  return (
    <MoviesProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="movies" element={<MoviesPage />} />
            <Route path="movies/:id" element={<MovieDetailsPage />} />
            <Route path="tv-shows" element={<ShowsPage />} />
            <Route path="search" element={<SearchResultsPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </MoviesProvider>
  );
}
