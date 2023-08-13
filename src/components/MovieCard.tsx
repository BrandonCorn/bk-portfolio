"use client";

import { Movie } from "./MovieGallery";
import Image from "next/image";

const MovieCard = ({ movie }: { movie: Movie }) => {
  return (
    <div className="flex flex-col border border-transparent rounded-xl shadow-xl my-2 mx-1 space-y-4">
      <Image src={movie.image} alt={"skate"} width={150} />

      <p className=""> title </p>
      <p> release date</p>
    </div>
  );
};

export default MovieCard;
