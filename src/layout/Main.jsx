import React from "react";
import { Movies } from "../components/Movies";
import { Preloader } from "../components/Preloader";

class Main extends React.Component{

  state = {
    movies: [],
    loading: true
  }

  componentDidMount(){
    fetch('http://www.omdbapi.com/?apikey=a1171f9e&s=matrix')
      .then(response => response.json())
      .then(data => {this.setState({movies: data.Search, loading: false}); console.log(data.Search);  });
  }

  render(){
    const {movies, loading} = this.state;
    return (
      <main className="content container">
        {
          loading ?
            <Preloader text="Loading..." />
            :
            <Movies movies={movies} />
        }
      </main>
    )
  }
}
export {Main};
