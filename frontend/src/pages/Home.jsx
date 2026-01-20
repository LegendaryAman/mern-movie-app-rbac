import { useEffect, useState } from "react";
import { fetchMovies, sortMovies } from "../services/movieService";

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies()
      .then((res) => setMovies(res.data))
      .catch((err) => console.error(err));
  }, []);

  const handleSort = (value) => {
    if (!value) return;

    sortMovies(value)
      .then((res) => setMovies(res.data))
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <h2>Movies</h2>

      {/* 🔽 SORT DROPDOWN */}
      <select onChange={(e) => handleSort(e.target.value)}>
        <option value="">Sort By</option>
        <option value="title">Title</option>
        <option value="rating">Rating</option>
        <option value="releaseDate">Release Date</option>
        <option value="duration">Duration</option>
      </select>

      {/* 🎬 MOVIE LIST */}
      {movies.map((movie) => (
        <div key={movie._id}>
          <h4>{movie.title}</h4>
          <p>{movie.description}</p>
        </div>
      ))}

      <button onClick={() => {
        api.delete(`/movies/${movie._id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }
        })
        .then(() => alert("Deleted"))
      }}>
        Delete
      </button>

    </div>
  );
}

export default Home;
