import React from "react";
import { Movies } from "../components/Movies";
import { Preloader } from "../components/Preloader";

class Main extends React.Component{

  state = {
    movies: []
  }

  componentDidMount(){
    fetch('http://www.omdbapi.com/?apikey=a1171f9e&s=matrix')
      .then(response => response.json())
      .then(data => {this.setState({movies: data.Search}); console.log(data.Search);  });
  }

  render(){
    const {movies} = this.state;
    return (
      <main className="content container">
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
