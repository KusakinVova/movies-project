import { Movie } from "./Movie";
import './Movies.css';

function Movies (props) {
  const {movies} = props;
  return (
    <div className="Movies">
      { movies !== undefined ? (
          movies.map((movie) => <Movie key={movie.imdbID} {...movie} />)
        ) : (
          <h4>Nothing found</h4>
        )
      }
    </div>
  );
}

export {Movies};
