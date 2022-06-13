import React from "react";
import { Movies } from "../components/Movies";
import { Preloader } from "../components/Preloader";
import { Search } from "../components/Search";

class Main extends React.Component{

  state = {
    movies: [],
    search: 'matrix',
    typemovie: '',
  }

  componentDidMount(){
    this.searchMovies(this.state.search, this.state.typemovie);
  }

  searchMovies = (str, typemovie) => {
    fetch(`http://www.omdbapi.com/?apikey=a1171f9e&s=${str}${ typemovie !== '' ? `&type=${typemovie}` : ''}`)
      .then(response => response.json())
      .then(data => {this.setState({movies: data.Search}); console.log(data.Search);  });
  }

  render(){
    const {movies, search, typemovie} = this.state;
    return (
      <main className="content container">
        <Search searchMovies={this.searchMovies} search={search} typemovie={typemovie} />
        {
          movies.length ?
            <Movies movies={movies} />
            :
            <Preloader text="Loading..." />
        }
      </main>
    )
  }
}
export {Main};
