import { useEffect, useState } from "react";

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("https://www.omdbapi.com/?s=batman&apikey=f4ef7351")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.Search || []);
      })
      .catch((err) => console.error(err));
  }, []);

  const handleSort = (value) => {
    if (!value) return;

    let sortedMovies = [...movies];

    if (value === "title") {
      sortedMovies.sort((a, b) =>
        a.Title.localeCompare(b.Title)
      );
    }

    if (value === "year") {
      sortedMovies.sort((a, b) =>
        b.Year - a.Year
      );
    }

    setMovies(sortedMovies);
  };

  return (
    <div>
      <h2>Movies</h2>

      {/* 🔽 SORT DROPDOWN */}
      <select onChange={(e) => handleSort(e.target.value)}>
        <option value="">Sort By</option>
        <option value="title">Title</option>
        <option value="year">Year</option>
      </select>

      {/* 🎬 MOVIE LIST */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {movies.map((movie) => (
          <div key={movie.imdbID}>
            <img
              src={movie.Poster}
              alt={movie.Title}
              width="150"
            />
            <h4>{movie.Title}</h4>
            <p>{movie.Year}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
