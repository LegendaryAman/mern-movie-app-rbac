import express from "express";
import { getAllMovies, searchMovies, sortMovies } from "../controllers/movieController.js";

const router = express.Router();

router.get("/sorted", sortMovies);

router.get("/search", searchMovies);

router.get("/", getAllMovies);

export default router;
