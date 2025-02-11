import React from "react";
import { Link } from "react-router-dom";

function Header({ wallpaper }) {
  // console.log(wallpaper);
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.3),rgba(0,0,0,0.5)),url(https://image.tmdb.org/t/p/original/${wallpaper.backdrop_path})`,
        backgroundPosition: "top",
        backgroundSize: "cover",
      }}
      className="w-full h-[60vh] flex flex-col justify-end items-start p-8"
    >
      <h1 className="text-white text-5xl font-g-bold mb-2">
        {wallpaper.original_title ||
          wallpaper.title ||
          wallpaper.name ||
          wallpaper.original_name}
      </h1>
      <p className="w-[70%] text-zinc-200 text-sm font-g-medium">
        {wallpaper.overview.slice(0, 200)}...{" "}
        <Link
          to={`/${wallpaper.media_type}/details/${wallpaper.id}`}
          className="text-blue-800"
        >
          more
        </Link>
      </p>
      <p className="mt-3 text-white font-g-regular text-lg capitalize ">
        <i className="text-yellow-400 ri-megaphone-line mr-2 "></i>
        {wallpaper.release_date || "No Information"}
        <i className="text-yellow-400 ri-album-line mr-2 ml-10"></i>
        {wallpaper.media_type || "No Information"}
      </p>
      <Link className="text-white text-xl font-g-bold py-2 mt-5 px-8  rounded-full border-3 ">
        Watch Trailer
      </Link>
    </div>
  );
}

export default Header;
