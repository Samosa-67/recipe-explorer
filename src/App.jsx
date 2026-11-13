import { HashRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import RecipeDetails from "./pages/RecipeDetails";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import RandomRecipe from "./pages/RandomRecipe";
import FAQ from "./pages/FAQ";
import CookingTips from "./pages/CookingTips";
import Privacy from "./pages/Privacy";

import "./App.css";

function App() {
  return (
    <HashRouter>
      <Navbar />

      <main className="main-content">
        <Routes>
          {/* Main pages */}
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/recipe/:id" element={<RecipeDetails />} />

          {/* Additional pages */}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/random" element={<RandomRecipe />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/cooking-tips" element={<CookingTips />} />
          <Route path="/privacy" element={<Privacy />} />

          {/* Unknown pages */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </HashRouter>
  );
}

export default App;