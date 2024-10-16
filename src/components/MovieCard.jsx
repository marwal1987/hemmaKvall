import { useDispatch } from "react-redux";
import { addFavorite, removeFavorite } from "../store/slices/favoritesSlice";
import TagManager from "react-gtm-module";

const MovieCard = ({ movie, isFavorite, onClick }) => {
  const dispatch = useDispatch();

  const handleFavoriteToggle = () => {
    if (isFavorite) {
      dispatch(removeFavorite(movie));
      // Skicka GTM event för 'ta bort favorit'
      TagManager.dataLayer({
        dataLayer: {
          event: "remove_favorite",
          movieTitle: movie.Title,
          movieId: movie.imdbID,
        },
      });
    } else {
      dispatch(addFavorite(movie));
      TagManager.dataLayer({ // Skicka GTM event för 'lägga till favorit'
        dataLayer: {
          event: "add_favorite",
          movieTitle: movie.Title,
          movieId: movie.imdbID
        }
      });
    }
  };

  return (
    <li className="container flex flex-col justify-between p-8 gap-4 items-center shadow-md bg-stone-50">
      <img src={movie.Poster} alt={movie.Title} className="max-h-80" />

      <div>
        <h2 className="text-lg text-gray-950 font-bold drop-shadow">
          {movie.Title}
        </h2>
        <p className="text-gray-950 text-sm">År: {movie.Year}</p>
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
    </li>
  );
};

export default MovieCard;
