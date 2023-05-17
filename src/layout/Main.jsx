import { useState, useEffect } from "react";
import { Movies } from "../components/Movies";
import { Preloader } from "../components/Preloader";
import { Search } from "../components/Search";

// eslint-disable-next-line no-undef
const API_KEY = process.env.REACT_APP_API_KEY;

function Main() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [typeMovie] = useState("");
  const [loading, setLoading] = useState(false);

  const searchMovies = (str, typeMovie) => {
    if (str !== "") {
      setLoading(true);
      fetch(
        `https://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${
          typeMovie !== "" ? `&type=${typeMovie}` : ""
        }`
      )
        .then((response) => response.json())
        .then((data) => {
          setMovies(data.Search);
          setLoading(false);
          console.log(data.Search);
        })
        .catch((err) => {
          console.error(err);
          setLoading(false);
        });
    }
  };
  useEffect(() => {
    searchMovies(search, typeMovie);
  }, [search, typeMovie]);

  console.log(search);

  return (
    <main className="content container">
      <Search
        searchMovies={searchMovies}
        searchProp={search}
        typeMovieProp={typeMovie}
      />
      {search === "" ? <h1>search film</h1> : ""}
      {loading ? <Preloader text="Loading..." /> : <Movies movies={movies} />}
    </main>
  );
}

export { Main };
