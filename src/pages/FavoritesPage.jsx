import { useState } from "react";
import { useSelector } from "react-redux";
import MovieCard from "../components/MovieCard";
import Modal from "../components/Modal";
import MetaTags from "../components/MetaTags";

/**
 * FavoritesPage Komponent
 * 
 * Visar en sida med användarens favoritfilmer. 
 * Låter användaren se detaljer om en specifik film via en modal.
 * 
 * State:
 * - showModal: Boolean som kontrollerar om modalen visas.
 * - selectedMovie: Innehåller den valda filmen för att visa detaljer i modalen.
 */

const FavoritesPage = () => {
  const favorites = useSelector((state) => state.favorites.favoritesList); // Hämtar listan av favoritfilmer från Redux state
  const [showModal, setShowModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  // Öppna modalen och visa detaljer för vald film
  const openModal = (movie) => {
    setSelectedMovie(movie);
    setShowModal(true);
  };

  // Stäng modalen
  const closeModal = () => {
    setShowModal(false);
    setSelectedMovie(null);
  };

  return (
    <section className="w-svw min-h-svh  flex flex-col items-center justify-start gap-12">
      <MetaTags
        title="Favoriter - HemmaKväll"
        description="Samla dina favoritfilmer på ett ställe med HemmaKväll. Se, hantera och njut av dina favoritfilmer enkelt och snabbt."
      />

      <h1 className="p-24 bg-gradient-to-br from-emerald-400 to-gray-400 w-full drop-shadow-xl" >Dina Favoriter</h1>
      {favorites.length === 0 ? (
        <h2>Inga favoriter tillagda.</h2>
      ) : (
        <ul className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 ">
          {favorites.map((movie) => (
            <MovieCard
              key={movie.imdbID}
              movie={movie}
              isFavorite={true}
              onClick={() => openModal(movie)} // Skicka hela filmobjektet till openModal -> Öppna modalen med filmens detaljer
            />
          ))}
        </ul>
      )}
      {showModal && selectedMovie && (
        <Modal movie={selectedMovie} onClose={closeModal} />
      )}
    </section>
  );
};

export default FavoritesPage;
