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
  