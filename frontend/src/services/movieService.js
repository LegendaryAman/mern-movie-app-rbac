import api from "./api";

export const fetchMovies = () => {
  return api.get("/movies");
};
