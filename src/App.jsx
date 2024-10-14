import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import HomePage from "./pages/HomePage";
import FavoritesPage from "./pages/FavoritesPage";

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
