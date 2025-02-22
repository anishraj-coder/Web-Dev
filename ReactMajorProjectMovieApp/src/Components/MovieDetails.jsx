import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getMovieDetails } from "./store/actions/getMovieDetails";
import { motion } from "motion/react";
import { div } from "motion/react-client";
import { removeMovieInfo } from "./store/reduces/movieSlice";
import Loader from "./partials/Loader";
import ErrorMessage from "./partials/ErrorMessage";
// Reusable components

const MovieDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { info, loading, error } = useSelector((state) => state.movie);
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getMovieDetails(id));
    return () => dispatch(removeMovieInfo());
  }, [dispatch, id]);

  if (loading) return <Loader />;
  if (error) return <ErrorMessage message={error} />;
  if (!info.detail) return null;

  const { detail, credits, videos, similar, recommendations } = info;

  return (
    <div className="min-h-screen overflow-auto bg-[#1F1E24]">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen bg-[#1F1E24] text-white"
      >
        {/* Hero Section */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="relative h-[80vh]"
        >
          <div className="absolute inset-0">
            <img
              src={`https://image.tmdb.org/t/p/original${detail.backdrop_path}`}
              alt={detail.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1F1E24] via-transparent to-transparent" />
          </div>

          <div className="absolute bottom-0 left-0 p-8 max-w-4xl">
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-5xl font-bold mb-4"
            >
              {detail.title}
            </motion.h1>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-4 mb-4"
            >
              <span className="bg-[#6556CD] px-4 py-2 rounded-full">
                {new Date(detail.release_date).getFullYear()}
              </span>
              <span className="bg-[#6556CD]/20 px-4 py-2 rounded-full">
                ⭐ {detail.vote_average.toFixed(1)}
              </span>
              <span className="bg-[#6556CD]/20 px-4 py-2 rounded-full">
                {Math.floor(detail.runtime / 60)}h {detail.runtime % 60}m
              </span>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-2"
            >
              {detail.genres?.map((genre) => (
                <span
                  key={genre.id}
                  className="bg-white/10 px-3 py-1 rounded-full text-sm"
                >
                  {genre.name}
                </span>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Content Section */}
        <div className="w-full px-4 py-12">
          {/* Overview */}
          <motion.section
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          >
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold mb-4 text-[#6556CD]">
                Overview
              </h2>
              <p className="text-gray-300 leading-relaxed text-lg">
                {detail.overview}
              </p>
            </div>
            <div className="bg-[#252525] p-6 rounded-xl">
              <h2 className="text-2xl font-bold mb-4 text-[#6556CD]">
                Details
              </h2>
              <div className="space-y-4">
                <div>
                  <span className="text-gray-400">Status: </span>
                  <span className="text-white">{detail.status}</span>
                </div>
                <div>
                  <span className="text-gray-400">Budget: </span>
                  <span className="text-white">
                    ${detail.budget.toLocaleString()}
                  </span>
                </div>
                <div>
                  <span className="text-gray-400">Revenue: </span>
                  <span className="text-white">
                    ${detail.revenue.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Cast Section */}
          {credits?.cast?.length > 0 && (
            <motion.section
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mb-16"
            >
              <h2 className="text-2xl font-bold mb-6 text-[#6556CD]">Cast</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {credits.cast.slice(0, 6).map((actor) => (
                  <motion.div
                    key={actor.id}
                    whileHover={{ y: -5 }}
                    className="bg-[#252525] rounded-xl overflow-hidden"
                  >
                    {actor.profile_path ? (
                      <img
                        src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                        alt={actor.name}
                        className="w-full h-64 object-cover"
                      />
                    ) : (
                      <div className="w-full h-64 bg-[#333] flex items-center justify-center">
                        <span className="text-gray-500">No Image</span>
                      </div>
                    )}
                    <div className="p-4">
                      <h3 className="font-semibold text-lg truncate">
                        {actor.name}
                      </h3>
                      <p className="text-gray-400 text-sm truncate">
                        {actor.character}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          )}

          {/* Videos Section */}
          {videos?.results?.length > 0 && (
            <motion.section
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="mb-16"
            >
              <h2 className="text-2xl font-bold mb-6 text-[#6556CD]">Videos</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {videos.results.slice(0, 2).map((video) => (
                  <motion.div
                    key={video.id}
                    whileHover={{ scale: 1.02 }}
                    className="bg-[#252525] rounded-xl overflow-hidden"
                  >
                    <iframe
                      className="w-full aspect-video"
                      src={`https://www.youtube.com/embed/${video.key}`}
                      title={video.name}
                      frameBorder="0"
                      allowFullScreen
                    />
                    <div className="p-4">
                      <h3 className="font-semibold text-lg">{video.name}</h3>
                      <p className="text-gray-400 text-sm">{video.type}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          )}

          {/* Similar Movies */}
          {similar?.results?.length > 0 && (
            <motion.section
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mb-16"
            >
              <h2 className="text-2xl font-bold mb-6 text-[#6556CD]">
                Similar Movies
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {similar.results.slice(0, 6).map((movie) => (
                  <motion.div
                    key={movie.id}
                    whileHover={{ y: -5 }}
                    className="bg-[#252525] rounded-xl overflow-hidden cursor-pointer"
                    onClick={() => navigate(`/movie/details/${movie.id}`)}
                  >
                    {movie.poster_path ? (
                      <img
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        alt={movie.title}
                        className="w-full aspect-[2/3] object-cover"
                      />
                    ) : (
                      <div className="w-full aspect-[2/3] bg-[#333] flex items-center justify-center">
                        <span className="text-gray-500">No Poster</span>
                      </div>
                    )}
                    <div className="p-4">
                      <h3 className="font-semibold text-lg truncate">
                        {movie.title}
                      </h3>
                      <div className="flex items-center justify-between mt-2">
                        <span className="text-gray-400 text-sm">
                          {movie.release_date
                            ? new Date(movie.release_date).getFullYear()
                            : "N/A"}
                        </span>
                        <span className="text-[#6556CD]">
                          ⭐ {movie.vote_average?.toFixed(1) || "N/A"}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          )}

          {/* Recommendations */}
          {similar?.results?.length > 0 && (
            <motion.section
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mb-16"
            >
              <h2 className="text-2xl font-bold mb-6 text-[#6556CD]">
                Similar Movies
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {similar.results.slice(0, 6).map((movie) => (
                  <motion.div
                    key={movie.id}
                    whileHover={{ y: -5 }}
                    className="bg-[#252525] rounded-xl overflow-hidden cursor-pointer"
                    onClick={() => navigate(`/movie/details/${movie.id}`)}
                  >
                    {movie.poster_path ? (
                      <img
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        alt={movie.title}
                        className="w-full aspect-[2/3] object-cover"
                      />
                    ) : (
                      <div className="w-full aspect-[2/3] bg-[#333] flex items-center justify-center">
                        <span className="text-gray-500">No Poster</span>
                      </div>
                    )}
                    <div className="p-4">
                      <h3 className="font-semibold text-lg truncate">
                        {movie.title}
                      </h3>
                      <div className="flex items-center justify-between mt-2">
                        <span className="text-gray-400 text-sm">
                          {movie.release_date
                            ? new Date(movie.release_date).getFullYear()
                            : "N/A"}
                        </span>
                        <span className="text-[#6556CD]">
                          ⭐ {movie.vote_average?.toFixed(1) || "N/A"}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default MovieDetails;
