import { Routes, Route, BrowserRouter } from "react-router-dom";
import MoviesPage from "./pages/MoviesPage";
import HomePage from "./pages/HomePage";
import ShowsPage from "./pages/ShowsPage";
import Layout from "./components/Layout/Layout";
import "./App.css";
export default function App() {
  return (
    <BrowserRouter> 
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomePage />}/>
          <Route path="/movies" element={< MoviesPage />} />
          <Route path="/tv-shows" element={<ShowsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
