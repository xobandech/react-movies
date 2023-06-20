import { Routes, Route, BrowserRouter } from "react-router-dom";
import MoviesPage from "./pages/MoviesPage";
import Layout from "./components/Layout";
import "./App.css";
export default function App() {
  
  return (
    <BrowserRouter> 
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/movies" element={< MoviesPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
