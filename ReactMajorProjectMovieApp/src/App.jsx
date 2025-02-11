import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Loader from "./Components/partials/Loader";
import Trending from "./Components/Trending";
import Popular from "./Components/Popular";
import Movie from "./Components/Movie";
import Tvshows from "./Components/Tvshows";
import People from "./Components/People";
import MovieDetails from "./Components/movieDetails";
import TvDetails from "./Components/tvDetails";

import PersonDetails from "./Components/personDetails";

function App() {
  return (
    <div className="bg-[#1F1E24] w-full h-screen flex">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/movie" element={<Movie />} />
        <Route path="/movie/details/:id" element={<MovieDetails />} />
        <Route path="/tvshows" element={<Tvshows />} />
        <Route path="/tv/details/:id" element={<TvDetails />} />
        <Route path="/people/details/:id" element={<PersonDetails />} />
        <Route path="/people" element={<People />} />
      </Routes>
    </div>
  );
}

export default App;
