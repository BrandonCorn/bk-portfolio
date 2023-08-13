"use client";

import { motion } from "framer-motion";
import MovieCard from "./MovieCard";
import MeowWolf from "../../public/about-me/meow-wolf-1.jpeg";

export type Movie = {
  title: string;
  releaseDate: string;
  image?: any;
};

const MovieGallery = ({ movies }: { movies: Movie[] }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col justify-start items-start space-y-12"
    >
      <div className="flex flex-col space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold">Vote for your movie!</h1>
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          As a lover of movies, I'd love to hear your thoughts! Vote on your
          favorite movie below. New movies will show up everyday to vote for!
        </p>
      </div>
      <div className="flex flex-col md:flex-row md:flex-wrap">
        {movies.map((movie: Movie, index) => {
          return <MovieCard movie={movie} key={index} />;
        })}
      </div>
    </motion.div>
  );
};

export default MovieGallery;
