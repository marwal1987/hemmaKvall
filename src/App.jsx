import { Route, Routes } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import HomePage from "./pages/HomePage";
import FavoritesPage from "./pages/FavoritesPage";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactGA from "react-ga4";

function App() {
  const location = useLocation(); // Få aktuell URL-position från React Router

  // Skicka pageview till Google Analytics varje gång URL:en ändras
  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: location.pathname });
  }, [location]); // Denna effekt körs varje gång "location" ändras (navigering)

  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
