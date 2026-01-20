import { useState } from "react";
import { searchMovies } from "../services/movieService";

function Search() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const handleSearch = () => {
    searchMovies(query)
      .then((res) => setMovies(res.data))
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <h2>Search Movies</h2>

      <input
        type="text"
        placeholder="Search by name or description"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <button onClick={handleSearch}>Search</button>

      {movies.map((movie) => (
        <div key={movie._id}>
          <h4>{movie.title}</h4>
          <p>{movie.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Search;
