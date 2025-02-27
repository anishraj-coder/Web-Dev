import axios from "../../../utils/axios";
import { setMovieInfo, setLoading, setError } from "../reduces/movieSlice";

export const getMovieDetails = (id) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const [
      { data: detail },
      { data: external_ids },
      { data: recommendations },
      { data: similar },
      { data: videos },
      { data: watchProviders },
      { data: credits },
    ] = await Promise.all([
      axios.get(`/movie/${id}`),
      axios.get(`/movie/${id}/external_ids`),
      axios.get(`/movie/${id}/recommendations`),
      axios.get(`/movie/${id}/similar`),
      axios.get(`/movie/${id}/videos`),
      axios.get(`/movie/${id}/watch/providers`),
      axios.get(`/movie/${id}/credits`),
    ]);

    dispatch(
      setMovieInfo({
        detail,
        externalIds: external_ids,
        recommendations: recommendations || { results: [] },
        similar: similar || { results: [] },
        videos,
        watchProviders,
        credits,
      })
    );
  } catch (error) {
    console.error("Movie Details Error:", error);
    dispatch(setError(error.response?.data?.status_message || error.message));
  } finally {
    dispatch(setLoading(false));
  }
};