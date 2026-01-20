import mongoose from "mongoose";

const movieSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true
    },
    description: {
      type: String,
      required: true
    },
    rating: {
      type: Number,
      required: true,
      min: 0,
      max: 10
    },
    releaseDate: {
      type: Date,
      required: true
    },
    duration: {
      type: Number, // minutes
      required: true
    }
  },
  {
    timestamps: true
  }
);

const Movie = mongoose.model("Movie", movieSchema);

export default Movie;
