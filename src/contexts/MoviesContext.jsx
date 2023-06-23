import { useState, createContext } from "react";

export const MoviesContext = createContext({
  movies: [],
  setMovies: () => null,
  loadedPages: [],
  setLoadedPages: () => null,
  currentPage: 1,
  setCurrentPage: () => null,
});

const MoviesProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [loadedPages, setLoadedPages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const value = { movies, setMovies, loadedPages, setLoadedPages, currentPage, setCurrentPage };
  return (
    <MoviesContext.Provider value={value}>
      {children}
    </MoviesContext.Provider>
  );
};

export default MoviesProvider;
