import axios from 'axios';

const IMG_BASE_PATH = 'https://image.tmdb.org/t/p/';
const POSTER_SIZE = 'w200';
const PHOTO_SIZE = 'w185';

const configAx = {
   method: 'GET',
   baseURL: 'https://api.themoviedb.org/3/',
   params: {language: 'en-US'},
   headers: {
     accept: 'application/json',
     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNmIzZmUyYTg1NWVhOWIzMWRlZjA4NmZhZjFkOTE1ZCIsInN1YiI6IjY1MDRmOWE4ZmEyN2Y0MDEwYzQ5NWZmMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aco7kgH7AVSDlJRBovgjUQ9BMrJvW6kY7Xqdllm0fao'
   },
};

async function serviceGetTrends(sig) {
   configAx.signal = sig;
  const { data } = await axios('/trending/movie/day', configAx);
  return data;
}

async function serviceGetMovieDetails(id, sig) {
  configAx.signal = sig;
  const { data } = await axios(`/movie/${id}`, configAx);
  return data;
}

async function serviceGetMovieCredits(id, sig) {
  configAx.signal = sig;
  const { data } = await axios(`/movie/${id}/credits`, configAx);
  return data;
}
// movie/movie_id/credits
async function serviceGetMovieReviews(id, sig) {
  configAx.signal = sig;
  const { data } = await axios(`/movie/${id}/reviews`, configAx);
  return data;
}


export { serviceGetTrends, serviceGetMovieDetails, serviceGetMovieCredits, serviceGetMovieReviews, 
  IMG_BASE_PATH, POSTER_SIZE, PHOTO_SIZE };
