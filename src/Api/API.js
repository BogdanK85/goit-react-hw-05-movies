import axios from 'axios';

axios.defaults.baseURL = `https://api.themoviedb.org/3`;
const API_KEY = `687efff36af1cb02afbba07349ebdf5d`;
axios.defaults.params = {
  api_key: API_KEY,
  include_adult: false,
  language: 'en-US',
};

export async function getTrendingMovies() {
  const { data } = await axios.get('trending/movie/week', {});
  return data.results;
}

export async function getSearchedMovies(query) {
  const response = await axios.get('/search/movie?query', {
    params: { query },
  });
  return response.data;
}

export async function getMoviesDetailsById(movieId) {
  const response = await axios.get(`movie/${movieId}`);
  return response.data;
}

export async function getMovieCast(movieId) {
  const response = await axios.get(`movie/${movieId}/credits`);
  return response.data.cast;
}

export async function getMoviesReviews(movieId) {
  const response = await axios.get(`movie/${movieId}/reviews`);
  return response.data.results;
}
