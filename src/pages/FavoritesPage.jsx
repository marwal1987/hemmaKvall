import React from "react";
import { useSelector, useDispatch } from "react-redux";

const FavoritesPage = () => {
  const favorites = useSelector((state) => state.favorites.favoritesList); // Hämta favoriter från Store
  const dispatch = useDispatch();

  return (
  <div>FavoritesPage</div>

  );
};

export default FavoritesPage;
