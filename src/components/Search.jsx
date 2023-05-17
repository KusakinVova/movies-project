import { useState } from "react";
import "./Search.css";
import PropTypes from "prop-types";
function Search({
  searchMovies = Function.prototype,
  searchProp,
  typeMovieProp,
}) {
  const [search, setSearch] = useState(searchProp);
  const [typeMovie, setTypeMovie] = useState(typeMovieProp);

  const handleFilter = (event) => {
    setTypeMovie(event.target.value);
    searchMovies(search, event.target.value);
  };

  const handleKey = (event) => {
    if (event.key === "Enter") {
      searchMovies(search, typeMovie);
    }
  };

  return (
    <div className="row">
      <div className="col s12">
        <div className="input-field">
          <input
            placeholder="search"
            name="search"
            type="search"
            value={search}
            className="validate"
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={handleKey}
          />
          <button
            onClick={() => searchMovies(search, typeMovie)}
            className="waves-effect waves-light btn search-btn"
          >
            Search
          </button>
        </div>
      </div>
      <div className="col s12 movie-types">
        <label className="movie-type">
          <input
            className="with-gap"
            name="typemovie"
            type="radio"
            value=""
            checked={typeMovie === ""}
            onChange={(event) => handleFilter(event)}
          />
          <span>All</span>
        </label>

        <label className="movie-type">
          <input
            className="with-gap"
            name="typemovie"
            type="radio"
            value="movie"
            checked={typeMovie === "movie"}
            onChange={(event) => handleFilter(event)}
          />
          <span>Movie</span>
        </label>

        <label className="movie-type">
          <input
            className="with-gap"
            name="typemovie"
            type="radio"
            value="game"
            checked={typeMovie === "game"}
            onChange={(event) => handleFilter(event)}
          />
          <span>Game</span>
        </label>

        <label className="movie-type">
          <input
            className="with-gap"
            name="typemovie"
            type="radio"
            value="series"
            checked={typeMovie === "series"}
            onChange={(event) => handleFilter(event)}
          />
          <span>Series</span>
        </label>

        <label className="movie-type">
          <input
            className="with-gap"
            name="typemovie"
            type="radio"
            value="episode"
            checked={typeMovie === "episode"}
            onChange={(event) => handleFilter(event)}
          />
          <span>Episode</span>
        </label>
      </div>
    </div>
  );
}

Search.propTypes = {
  searchMovies: PropTypes.func,
  searchProp: PropTypes.string,
  typeMovieProp: PropTypes.string,
};

export { Search };
