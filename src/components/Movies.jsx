import { Movie } from "./Movie";
import './Movies.css';

function Movies (props) {
  return (
    <div className="Movies row">
    {
      props.movies.map(movie =>
        <Movie
          key={movie.imdbID}
          movie={movie}
        />
      )
    }
    </div>
  );
}

export {Movies};