import React, {useState} from "react";
import './Search.css';

function Search (props) {
  const [search, setSearch] = useState(props.search);
  const [typemovie, setTypemovie] = useState(props.typemovie);

  const searchMovies = (search, typemovie) => {
    props.searchMovies(search, typemovie);
  }

  const handleFilter = (event) => {
    setTypemovie(event.target.value);
    searchMovies(search, event.target.value);
  }

  const handleKey = (event) => {
    if(event.key === 'Enter'){
      searchMovies(search, typemovie);
    }
  }

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
            onClick={() => searchMovies(search, typemovie)}
            className="waves-effect waves-light btn search-btn"
          >Search</button>
        </div>
      </div>
      <div className="col s12 movie-types">
        <label className="movie-type">
          <input
            className="with-gap"
            name="typemovie"
            type="radio"
            value=""
            checked={typemovie === ""}
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
            checked={typemovie === "movie"}
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
            checked={typemovie === "game"}
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
            checked={typemovie === "series"}
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
            checked={typemovie === "episode"}
            onChange={(event) => handleFilter(event)}
          />
          <span>Episode</span>
        </label>

      </div>
    </div>
  );
}

export {Search};
