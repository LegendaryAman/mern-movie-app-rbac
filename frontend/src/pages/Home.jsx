import { useEffect, useState } from "react";
import { fetchMovies } from "../services/movieService";

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies()
      .then((res) => setMovies(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h2>Movies</h2>
      {movies.map((movie) => (
        <div key={movie._id}>
          <h4>{movie.title}</h4>
          <p>{movie.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Home;
