import express from "express";
import { protect, adminOnly } from "../middleware/authMiddleware.js";
import {
  getAllMovies,
  searchMovies,
  sortMovies,
  addMovie,
  updateMovie,
  deleteMovie
} from "../controllers/movieController.js";
const router = express.Router();

router.get("/sorted", sortMovies);

router.get("/search", searchMovies);

router.get("/", getAllMovies);


router.post("/", protect, adminOnly, addMovie);
router.put("/:id", protect, adminOnly, updateMovie);
router.delete("/:id", protect, adminOnly, deleteMovie);

export default router;
