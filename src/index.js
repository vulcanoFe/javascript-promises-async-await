import { fetchBooks, fetchMovies, fetchWithTimeout } from "./services";

function getBooksAndMovies() {
  return Promise.all([fetchBooks(), fetchMovies()])
    .then(([books, movies]) => ({
      books,
      movies
    }))
    .catch(error => console.log("Error fetching books and movies", error));
}

const getBooksAndMoviesPromise = getBooksAndMovies();
getBooksAndMoviesPromise.then(results => console.log("getBooksAndMoviesPromise", results));

function getBooksOrMovies() {
  return Promise.race([fetchBooks(), fetchMovies()])
    .then(results => results)
    .catch(error => console.log("Error waiting for the promise race", error));
}

const getBookOrMoviesPromise = getBooksOrMovies();
getBookOrMoviesPromise.then(results => console.log("getBookOrMoviesPromise", results));