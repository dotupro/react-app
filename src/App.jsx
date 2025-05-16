import "./css/App.css";
import { HomePages } from "./pages/HomePages";
import { FavoritePages } from "./pages/FavoritePages";
import { Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar.jsx";
import { MovieProvider } from "./contexts/MovieContext.jsx";

function App() {
  return (
    <MovieProvider>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomePages />} />
          <Route path="/favorite" element={<FavoritePages />} />
        </Routes>
      </main>
    </MovieProvider>
  );
}

export default App;
