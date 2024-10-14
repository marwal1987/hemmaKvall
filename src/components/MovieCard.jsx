import { useDispatch } from "react-redux";
import { addFavorite, removeFavorite } from "../store/slices/favoritesSlice"; // Se till att detta importeras korrekt

const MovieCard = ({ movie, isFavorite, onRemoveFavorite, onClick }) => {
  const dispatch = useDispatch();

  const handleFavoriteToggle = () => {
    if (isFavorite) {
      dispatch(removeFavorite(movie));
      if (onRemoveFavorite) onRemoveFavorite(); // Om det är en favorit, ta bort
    } else {
      dispatch(addFavorite(movie)); // Annars, lägg till
    }
  };

  return (
    <article className="container flex flex-col justify-between p-4 gap-4 items-center shadow-md bg-stone-50">
      <img src={movie.Poster} alt={movie.Title} className="max-h-80" />

      <div>
        <h2 className="text-lg text-gray-950 font-bold drop-shadow">
          {movie.Title}
        </h2>
        <p className="text-gray-950 text-md">År: {movie.Year}</p>
      </div>

      <button
        onClick={handleFavoriteToggle}
        className={`px-4 py-2 w-full text-white ${
          isFavorite ? "bg-amber-500" : "bg-emerald-600"
        }`}
      >
        {isFavorite ? "Ta Bort Favorit" : "Lägg Till Favorit"}
      </button>

      <button
        onClick={onClick}
        className="px-4 py-2 w-full text-white bg-gray-800"
      >
        Visa mer
      </button>
    </article>
  );
};

export default MovieCard;
