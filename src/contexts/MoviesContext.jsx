import {useState, createContext} from "react";


export const MoviesContext = createContext({
    movies: [],
    setMovies: () => null,
})

const MoviesProvider = ({children}) => {
    const [movies, setMovies] = useState([]);
    const value = { movies, setMovies }
    return (
        <MoviesContext.Provider value={value}>
            {children}
        </MoviesContext.Provider>
    )
}

export default MoviesProvider