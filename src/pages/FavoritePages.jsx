import "../css/Favorites.css";
import { useMovieContext } from "../contexts/MovieContext";
import { MovieCard } from "../components/MovieCard";

export function FavoritePages() {
  const { favorites } = useMovieContext();

  if (favorites) {
    return (
      <div className="favorites">
        <h2>Your Favorites</h2>
        <div className="movies-grid">
          {favorites.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="favorite-empty">
      <h1>No favorite movie yet</h1>
      <p>Here you can find your favorite pages.</p>
    </div>
  );
}
