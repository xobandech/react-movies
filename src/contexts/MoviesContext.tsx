import React, { useState, createContext } from "react";

type MoviesContextType = {
  movies: [];
  setMovies: (movies: []) => void;
  loadedPages: number[];
  setLoadedPages: (loadedPages: number[]) => void;
  currentPage: number;
  setCurrentPage: (currentPage: number) => void;
}

export const MoviesContext = createContext<MoviesContextType>({
  movies: [],
  setMovies: () => null,
  loadedPages: [],
  setLoadedPages: () => null,
  currentPage: 1,
  setCurrentPage: () => null,
});

const MoviesProvider = ({ children }: {children: React.ReactNode}) => {
  const [movies, setMovies] = useState<[]>([]);
  const [loadedPages, setLoadedPages] = useState<number[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const value: MoviesContextType = { movies, setMovies, loadedPages, setLoadedPages, currentPage, setCurrentPage };
  return (
    <MoviesContext.Provider value={value}>
      {children}
    </MoviesContext.Provider>
  );
};

export default MoviesProvider;
