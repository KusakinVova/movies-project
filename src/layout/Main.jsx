import React, {useState, useEffect} from "react";
import { Movies } from "../components/Movies";
import { Preloader } from "../components/Preloader";
import { Search } from "../components/Search";

const API_KEY = process.env.REACT_APP_API_KEY;

function Main(){
  const [movies, setMovies] = useState([]);
  const [search] = useState('matrix');
  const [typemovie] = useState('');
  const [loading, setLoading] = useState(true);

  const searchMovies = (str, typemovie) => {
    setLoading(true);
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${ typemovie !== '' ? `&type=${typemovie}` : ''}`)
      .then(response => response.json())
      .then(data => {
        setMovies(data.Search)
        setLoading(false);
        // console.log(data.Search);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }

  useEffect(() => {
      searchMovies(search, typemovie);
  }, []);

  return (
    <main className="content container">
      <Search searchMovies={searchMovies} search={search} typemovie={typemovie} />
      { loading ? <Preloader text="Loading..." /> : <Movies movies={movies} />}
    </main>
  )

}

export {Main};
