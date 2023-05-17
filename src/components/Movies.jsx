import { Movie } from "./Movie";
import "./Movies.css";
import PropTypes from "prop-types";

function Movies({ movies }) {
  return (
    <div className="Movies">
      {movies !== undefined ? (
        movies.map((movie) => <Movie key={movie.imdbID} {...movie} />)
      ) : (
        <h4>Nothing found</h4>
      )}
    </div>
  );
}
Movies.propTypes = {
  movies: PropTypes.any,
};
export { Movies };
