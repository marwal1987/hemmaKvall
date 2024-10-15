import { useState } from "react";
import { useSelector } from "react-redux";
import MovieCard from "../components/MovieCard";
import Modal from "../components/Modal";
import MetaTags from "../components/MetaTags";

const FavoritesPage = () => {
  const favorites = useSelector((state) => state.favorites.favoritesList);
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
    <section className="w-svw min-h-svh  bg-gradient-to-tr from-emerald-500 to-gray-400 flex flex-col items-center justify-start gap-12 p-6">
      <MetaTags
        title="Favoriter - HemmaKväll"
        description="Samla dina favoritfilmer på ett ställe med HemmaKväll. Se, hantera och njut av dina favoritfilmer enkelt och snabbt."
      />

      <h1 className="">Dina Favoriter</h1>
      {favorites.length === 0 ? (
        <p>Inga favoriter tillagda.</p>
      ) : (
        <ul className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 ">
          {favorites.map((movie) => (
            <MovieCard
              key={movie.imdbID}
              movie={movie}
              isFavorite={true}
              onClick={() => openModal(movie)}
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
