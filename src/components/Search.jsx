import React from "react";
import './Search.css';

class Search extends React.Component{
  state = {
    search: this.props.search,
    typemovie: this.props.typemovie,
  }

  handleChange = (event) => {
    this.setState(() => ({
      [event.target.name]: event.target.value,
    }), () => {
      this.searchMovies();
    });
  }

  searchMovies = () => {
    this.props.searchMovies(this.state.search, this.state.typemovie);
  }

  handleKey = (event) => {
    if(event.key === 'Enter'){
      this.searchMovies();
    }
  }

  render (){
    const {search, typemovie} = this.state;
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
              onChange={(e) => this.setState({search: e.target.value})}
              onKeyDown={this.handleKey}
            />
            <button
              onClick={() => this.searchMovies()}
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
              onChange={this.handleChange}
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
              onChange={this.handleChange}
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
              onChange={this.handleChange}
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
              onChange={this.handleChange}
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
              onChange={this.handleChange}
            />
            <span>Episode</span>
          </label>

        </div>
      </div>
    );
  }
}
export {Search};


