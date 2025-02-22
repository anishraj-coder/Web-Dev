import axios from "../../../utils/axios";
import { setTvInfo, setLoading, setError } from "../reduces/tvSlice";

export const getTVDetails = (id) => async (dispatch) => {
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
      axios.get(`/tv/${id}`),
      axios.get(`/tv/${id}/external_ids`),
      axios.get(`/tv/${id}/recommendations`),
      axios.get(`/tv/${id}/similar`),
      axios.get(`/tv/${id}/videos`),
      axios.get(`/tv/${id}/watch/providers`),
      axios.get(`/tv/${id}/credits`),
    ]);

    dispatch(
      setTvInfo({
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
    console.error("TV Details Error:", error);
    dispatch(setError(error.response?.data?.status_message || error.message));
  } finally {
    dispatch(setLoading(false));
  }
};