import { useState } from "react";
import api from "../services/api";

function AdminAddMovie() {
  const [movie, setMovie] = useState({});

  const handleAdd = () => {
    api.post("/movies", movie, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    })
    .then(() => alert("Movie added"))
    .catch(() => alert("Not authorized"));
  };

  return (
    <div>
      <h2>Add Movie</h2>
      <input placeholder="Title" onChange={(e) => setMovie({ ...movie, title: e.target.value })} />
      <input placeholder="Description" onChange={(e) => setMovie({ ...movie, description: e.target.value })} />
      <input placeholder="Rating" onChange={(e) => setMovie({ ...movie, rating: e.target.value })} />
      <input placeholder="Release Date" onChange={(e) => setMovie({ ...movie, releaseDate: e.target.value })} />
      <input placeholder="Duration" onChange={(e) => setMovie({ ...movie, duration: e.target.value })} />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}

export default AdminAddMovie;
