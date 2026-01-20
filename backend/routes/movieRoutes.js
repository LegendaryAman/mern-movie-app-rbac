import express from "express";
import { getAllMovies, searchMovies } from "../controllers/movieController.js";

const router = express.Router();

router.get("/search", searchMovies);

router.get("/", getAllMovies);

export default router;
