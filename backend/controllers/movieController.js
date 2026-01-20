import Movie from "../models/movie.js";

export const getAllMovies = async (req, res) => {
  try {
    const movies = await Movie.find();
    res.status(200).json(movies);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch movies" });
  }
};

export const searchMovies = async (req, res) => {
    const { query } = req.query;
  
    try {
      const movies = await Movie.find({
        $or: [
          { title: { $regex: query, $options: "i" } },
          { description: { $regex: query, $options: "i" } }
        ]
      });
  
      res.status(200).json(movies);
    } catch (error) {
      res.status(500).json({ message: "Search failed" });
    }
  };

  export const sortMovies = async (req, res) => {
    const { sortBy } = req.query;
  
    let sortOption = {};
  
    if (sortBy === "title") sortOption = { title: 1 };
    if (sortBy === "rating") sortOption = { rating: -1 };
    if (sortBy === "releaseDate") sortOption = { releaseDate: -1 };
    if (sortBy === "duration") sortOption = { duration: 1 };
  
    try {
      const movies = await Movie.find().sort(sortOption);
      res.status(200).json(movies);
    } catch (error) {
      res.status(500).json({ message: "Sorting failed" });
    }
  };
  
  export const addMovie = async (req, res) => {
    try {
      const movie = await Movie.create(req.body);
      res.status(201).json(movie);
    } catch (error) {
      res.status(400).json({ message: "Failed to add movie" });
    }
  };

  
  export const updateMovie = async (req, res) => {
    try {
      const movie = await Movie.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
  
      if (!movie) {
        return res.status(404).json({ message: "Movie not found" });
      }
  
      res.status(200).json(movie);
    } catch (error) {
      res.status(400).json({ message: "Failed to update movie" });
    }
  };

  
  export const deleteMovie = async (req, res) => {
    try {
      const movie = await Movie.findByIdAndDelete(req.params.id);
  
      if (!movie) {
        return res.status(404).json({ message: "Movie not found" });
      }
  
      res.status(200).json({ message: "Movie deleted successfully" });
    } catch (error) {
      res.status(400).json({ message: "Failed to delete movie" });
    }
  };
   