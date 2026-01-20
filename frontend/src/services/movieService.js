import api from "./api";

export const fetchMovies = () => {
  return api.get("/movies");
};

export const searchMovies = (query) => {
    return api.get(`/movies/search?query=${query}`);
  };
  
  export const sortMovies = (sortBy) => {
    return api.get(`/movies/sorted?sortBy=${sortBy}`);
  };
  