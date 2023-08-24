import React, { useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [Movies, setMovies] = useState([]);
  function feathcMoviesHandler() {
    fetch("https://swapi.dev/api/films/")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const arrangeMovies = data.results.map((movieList) => {
          return {
            id: movieList.episode_id,
            title: movieList.title,
            releaseDate: movieList.release_date,
            openingText: movieList.opening_crawl
          };
        });

        setMovies(arrangeMovies);
      });
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={feathcMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={Movies} />
      </section>
    </React.Fragment>
  );
}

export default App;
