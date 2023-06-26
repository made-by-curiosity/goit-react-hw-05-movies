import axios from 'axios';

const API_KEY = 'cb35597b2b05bb14bc9f2fcf9c7c8175';
const BASE_URL = 'https://api.themoviedb.org';
const TRENDING_PATH = '/3/trending/movie/day';
const MOVIE_INFO_PATH = '/3/movie/';

export function getTrendingMovies() {
  const options = {
    method: 'GET',
    url: `${BASE_URL + TRENDING_PATH}?api_key=${API_KEY}`,
    headers: {
      accept: 'application/json',
    },
  };

  return axios.request(options);
}

export const getMovieInfo = movieId => {
  const options = {
    method: 'GET',
    url: `${BASE_URL + MOVIE_INFO_PATH}${movieId}?api_key=${API_KEY}`,
    headers: {
      accept: 'application/json',
    },
  };

  return axios.request(options);
};

export const getMovieCredits = movieId => {
  const options = {
    method: 'GET',
    url: `${BASE_URL + MOVIE_INFO_PATH}${movieId}/credits?api_key=${API_KEY}`,
    headers: {
      accept: 'application/json',
    },
  };

  return axios.request(options);
};

export const getMovieReviews = movieId => {
  const options = {
    method: 'GET',
    url: `${BASE_URL + MOVIE_INFO_PATH}${movieId}/reviews?api_key=${API_KEY}`,
    headers: {
      accept: 'application/json',
    },
  };

  return axios.request(options);
};
