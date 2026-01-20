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
  