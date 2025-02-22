import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getTVDetails } from './store/actions/getTVDetails';
import { motion } from 'framer-motion';
import { removeTvInfo } from './store/reduces/tvSlice';
import Loader from './partials/Loader';
import ErrorMessage from './partials/ErrorMessage';

function TvDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { info, loading, error } = useSelector((state) => state.tv);
  const { detail, credits, videos, recommendations, similar } = info;

  useEffect(() => {
    dispatch(getTVDetails(id));
    return () => dispatch(removeTvInfo());
  }, [dispatch, id]);

  if (loading) return <Loader />;
  if (error) return <ErrorMessage message={error} />;
  if (!detail) return <div className="min-h-screen bg-[#1F1E24] text-white p-8">No TV show found</div>;

  return (
    <div className='min-h-screen overflow-auto bg-[#1F1E24]'>
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
            {detail?.backdrop_path && (
              <img
                src={`https://image.tmdb.org/t/p/original/${detail.backdrop_path}`}
                alt={detail?.name || 'TV Show Backdrop'}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1F1E24] via-transparent to-transparent" />
          </div>

          <div className="absolute bottom-0 left-0 p-8 max-w-4xl">
            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-5xl font-bold mb-4"
            >
              {detail?.name || 'Untitled TV Show'}
            </motion.h1>

            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-4 mb-4"
            >
              <span className="bg-[#6556CD] px-4 py-2 rounded-full">
                {detail?.first_air_date ? new Date(detail.first_air_date).getFullYear() : 'N/A'}
              </span>
              <span className="bg-[#6556CD]/20 px-4 py-2 rounded-full">
                ⭐ {detail?.vote_average?.toFixed(1) || 'N/A'}
              </span>
              <span className="bg-[#6556CD]/20 px-4 py-2 rounded-full">
                {detail?.episode_run_time?.[0] ? `${detail.episode_run_time[0]} min` : 'N/A'}
              </span>
            </motion.div>

            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-2"
            >
              {detail?.genres?.map((genre) => (
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
              <h2 className="text-2xl font-bold mb-4 text-[#6556CD]">Overview</h2>
              <p className="text-gray-300 leading-relaxed text-lg">
                {detail?.overview || 'No overview available'}
              </p>
            </div>
            <div className="bg-[#252525] p-6 rounded-xl">
              <h2 className="text-2xl font-bold mb-4 text-[#6556CD]">Details</h2>
              <div className="space-y-4">
                <div>
                  <span className="text-gray-400">Status: </span>
                  <span className="text-white">{detail?.status || 'N/A'}</span>
                </div>
                {detail?.number_of_seasons && (
                  <div>
                    <span className="text-gray-400">Seasons: </span>
                    <span className="text-white">{detail.number_of_seasons}</span>
                  </div>
                )}
                {detail?.number_of_episodes && (
                  <div>
                    <span className="text-gray-400">Episodes: </span>
                    <span className="text-white">{detail.number_of_episodes}</span>
                  </div>
                )}
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
                      <h3 className="font-semibold text-lg truncate">{actor.name}</h3>
                      <p className="text-gray-400 text-sm truncate">{actor.character}</p>
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

          {/* Similar TV Shows */}
          {similar?.results?.length > 0 && (
            <motion.section
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mb-16"
            >
              <h2 className="text-2xl font-bold mb-6 text-[#6556CD]">Similar TV Shows</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {similar.results.slice(0, 6).map((tv) => (
                  <motion.div
                    key={tv.id}
                    whileHover={{ y: -5 }}
                    className="bg-[#252525] rounded-xl overflow-hidden cursor-pointer"
                    onClick={() => navigate(`/tv/details/${tv.id}`)}
                  >
                    {tv.poster_path ? (
                      <img
                        src={`https://image.tmdb.org/t/p/w500${tv.poster_path}`}
                        alt={tv.name}
                        className="w-full aspect-[2/3] object-cover"
                      />
                    ) : (
                      <div className="w-full aspect-[2/3] bg-[#333] flex items-center justify-center">
                        <span className="text-gray-500">No Poster</span>
                      </div>
                    )}
                    <div className="p-4">
                      <h3 className="font-semibold text-lg truncate">{tv.name}</h3>
                      <div className="flex items-center justify-between mt-2">
                        <span className="text-gray-400 text-sm">
                          {tv.first_air_date ? new Date(tv.first_air_date).getFullYear() : 'N/A'}
                        </span>
                        <span className="text-[#6556CD]">
                          ⭐ {tv.vote_average?.toFixed(1) || 'N/A'}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          )}

          {/* Recommended TV Shows */}
          {recommendations?.results?.length > 0 && (
            <motion.section
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              <h2 className="text-2xl font-bold mb-6 text-[#6556CD]">Recommended TV Shows</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {recommendations.results.slice(0, 6).map((tv) => (
                  <motion.div
                    key={tv.id}
                    whileHover={{ y: -5 }}
                    className="bg-[#252525] rounded-xl overflow-hidden cursor-pointer"
                    onClick={() => navigate(`/tv/details/${tv.id}`)}
                  >
                    {tv.poster_path ? (
                      <img
                        src={`https://image.tmdb.org/t/p/w500${tv.poster_path}`}
                        alt={tv.name}
                        className="w-full aspect-[2/3] object-cover"
                      />
                    ) : (
                      <div className="w-full aspect-[2/3] bg-[#333] flex items-center justify-center">
                        <span className="text-gray-500">No Poster</span>
                      </div>
                    )}
                    <div className="p-4">
                      <h3 className="font-semibold text-lg truncate">{tv.name}</h3>
                      <div className="flex items-center justify-between mt-2">
                        <span className="text-gray-400 text-sm">
                          {tv.first_air_date ? new Date(tv.first_air_date).getFullYear() : 'N/A'}
                        </span>
                        <span className="text-[#6556CD]">
                          ⭐ {tv.vote_average?.toFixed(1) || 'N/A'}
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
}

export default TvDetails;