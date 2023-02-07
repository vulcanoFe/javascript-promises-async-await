import { fetchWithTimeout } from "./services";
let movies = require("./data/movies.json");

export function fetchMovies() {
  const resolveFunction = () => movies;
  fetchWithTimeout(1000).then(resolveFunction);
}

let moviePromise = fetchMovies();
moviePromise.then(
  (results) => {
    console.log(results);
  }
)