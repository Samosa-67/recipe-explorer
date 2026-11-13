import { HashRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import RecipeDetails from "./pages/RecipeDetails";

import "./App.css";

function App() {
  return (
    <HashRouter>
      <Navbar />

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="/favorites"
            element={<Favorites />}
          />

          <Route
            path="/recipe/:id"
            element={<RecipeDetails />}
          />

          <Route
            path="*"
            element={<Home />}
          />
        </Routes>
      </main>

      <Footer />
    </HashRouter>
  );
}

export default App;