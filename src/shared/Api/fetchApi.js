import axios from "axios";

const KEY = '979be2e8af6c311d4581ad02e7161f2f';
const BASE_URL = 'https://api.themoviedb.org/3';

export async function fetchTrending() {
    const url = `${BASE_URL}/trending/movie/day?api_key=${KEY}&language=en-US&include_adult=false`;
    const { data } = await axios.get(url);
    return data;
  }
  
  export async function fetchMovieDetails(id) {
    const url = `${BASE_URL}/movie/${id}?api_key=${KEY}&language=en-US&include_adult=false`;
    const { data } = await axios.get(url);
    return data;
}
  
export async function fetchSearchMovie(query) {
      const url = `${BASE_URL}/search/movie?api_key=${KEY}&query=${query}&language=en-US&include_adult=false`;
      const { data } = await axios.get(url);
      return data;
    }
  
  export async function fetchMovieCast(id) {
    const url = `${BASE_URL}/movie/${id}/credits?api_key=${KEY}&language=en-US&include_adult=false`;
    const { data } = await axios.get(url);
    return data;
  }
  
  export async function fetchMovieReviews(id) {
    const url = `${BASE_URL}/movie/${id}/reviews?api_key=${KEY}&language=en-US&include_adult=false`;
    const { data } = await axios.get(url);
    return data;
  }
