import axios from 'axios';

const movies = axios.create({
  baseURL: 'https://api.themoviedb.org',
});
movies.defaults.headers.common['Authorization'] =
  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYjM1NTk3YjJiMDViYjE0YmM5ZjJmY2Y5YzdjODE3NSIsInN1YiI6IjY0NTE2ZWFlMzNhZDhmMDEzODBjNjJkNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bMoVDHRK88i5iEyNrLKnupm4rYxoTTHyrlIdKlXSsAo';

const TRENDING_PATH = '/3/trending/movie/day';
const MOVIE_INFO_PATH = '/3/movie/';
const MOVIE_SEARCH_PATH = '/3/search/movie';

export function getTrendingMovies() {
  return movies.get(TRENDING_PATH);
}

export const getMovieInfo = (movieId, path = '') => {
  return movies.get(MOVIE_INFO_PATH + movieId + path);
};

export const searchMovies = searchQuery => {
  return movies.get(MOVIE_SEARCH_PATH + `?query=${searchQuery}`);
};
