import axios from 'axios';
const baseUrl = 'https://api.themoviedb.org/3/movie';

export const getMovies = () => {
  return axios({
    method: 'GET',
    url: `${baseUrl}/now_playing?api_key=a07e22bc18f5cb106bfe4cc1f83ad8ed`,
  });
};

export const getTopRanked = () => {
  return axios({
    method: 'GET',
    url: `${baseUrl}/top_rated?api_key=a07e22bc18f5cb106bfe4cc1f83ad8ed`,
  });
};
