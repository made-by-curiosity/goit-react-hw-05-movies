import axios from 'axios';

const API_KEY = 'cb35597b2b05bb14bc9f2fcf9c7c8175';
const BASE_URL = 'https://api.themoviedb.org';
const TRENDING_PATH = '/3/trending/movie/day';
const MOVIE_INFO_PATH = '/3/movie/';
const MOVIE_SEARCH_PATH = '/3/search/movie';

export function getTrendingMovies() {
  const options = {
    method: 'GET',
    url: BASE_URL + TRENDING_PATH,
    params: {
      api_key: API_KEY,
    },
    headers: {
      accept: 'application/json',
    },
  };

  return axios.request(options);
}

export const getMovieInfo = movieId => {
  const options = {
    method: 'GET',
    url: BASE_URL + MOVIE_INFO_PATH + movieId,
    params: {
      api_key: API_KEY,
    },
    headers: {
      accept: 'application/json',
    },
  };

  return axios.request(options);
};

export const getMovieCredits = movieId => {
  const options = {
    method: 'GET',
    url: `${BASE_URL + MOVIE_INFO_PATH + movieId}/credits`,
    params: {
      api_key: API_KEY,
    },
    headers: {
      accept: 'application/json',
    },
  };

  return axios.request(options);
};

export const getMovieReviews = movieId => {
  const options = {
    method: 'GET',
    url: `${BASE_URL + MOVIE_INFO_PATH + movieId}/reviews`,
    params: {
      api_key: API_KEY,
    },
    headers: {
      accept: 'application/json',
    },
  };

  return axios.request(options);
};

export const searchMovies = searchQuery => {
  const options = {
    method: 'GET',
    url: BASE_URL + MOVIE_SEARCH_PATH,
    params: {
      query: searchQuery,
      api_key: API_KEY,
    },
    headers: {
      accept: 'application/json',
    },
  };

  return axios.request(options);
};
