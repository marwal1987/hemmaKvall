import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchMoviesBySearchTerm } from "../store/slices/moviesSlice";
import SearchBar from "../components/SearchBar";
import HeroSection from "../components/HeroSection";
import MovieCard from "../components/MovieCard";
import Modal from "../components/Modal";
import MetaTags from "../components/MetaTags";

const HomePage = () => {
  const dispatch = useDispatch();
  const { movies, status } = useSelector((state) => state.movies);
  const favorites = useSelector((state) => state.favorites.favoritesList);
  const [showModal, setShowModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  // Trigga hämtning av filmer vid sökning
  const handleSearch = (searchTerm) => {
    dispatch(fetchMoviesBySearchTerm(searchTerm));
  };

  // Kontrollera om en film är en favorit
  const isMovieFavorite = (movie) => {
    return favorites.some((fav) => fav.imdbID === movie.imdbID);
  };

  // Öppna modal med den valda filmen
  const openModal = (movie) => {
    setSelectedMovie(movie);
    setShowModal(true);
  };

  // Stäng modalen och rensa vald film
  const closeModal = () => {
    setShowModal(false); 
    setSelectedMovie(null);
  };

  return (
    <section className="w-svw min-h-svh flex flex-col items-center justify-start">
      <MetaTags
        title="Hem - HemmaKväll"
        description="Upptäck de senaste och bästa filmerna hos HemmaKväll. Skapa din egen favoritsamling och njut av en smidig upplevelse med enkel navigering. Perfekt för filmälskare!"
      />

      <HeroSection />
      <SearchBar onSearch={handleSearch} />
      <ul className="movie-list grid xl:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-4 p-6">
        {status === "loading" && <p>Laddar filmer...</p>}
        {movies.length > 0
          ? movies.map((movie) => (
              <MovieCard
                key={movie.imdbID}
                movie={movie}
                isFavorite={isMovieFavorite(movie)}
                onClick={() => openModal(movie)} // Skicka hela filmobjektet till openModal
              />
            ))
          : status === "succeeded" && <p>Inga filmer hittades.</p>}
      </ul>
      {showModal && selectedMovie && (
        <Modal movie={selectedMovie} onClose={closeModal} />
      )}
    </section>
  );
};

export default HomePage;
