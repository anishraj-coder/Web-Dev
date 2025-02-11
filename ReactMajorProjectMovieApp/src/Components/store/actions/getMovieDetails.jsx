import axios from "../../../utils/axios";
import { setMovieInfo, removeMovieInfo } from "../reduces/movieSlice";

// Add loading and error actions
export const setLoading = (status) => ({
  type: 'SET_LOADING',
  payload: status
});

export const setError = (error) => ({
  type: 'SET_ERROR',
  payload: error
});

export const getMovieDetails = (id) => async (dispatch) => {
    dispatch(setLoading(true)); // Start loading
    
    try {
        const [
            { data: detail },
            { data: externalIds },
            { data: recommendations },
            { data: { results: similar } },
            { data: videos },
            { data: watchProviders },
            { data: credits }
        ] = await Promise.all([
            axios.get(`/movie/${id}`),
            axios.get(`/movie/${id}/external_ids`),
            axios.get(`/movie/${id}/recommendations`),
            axios.get(`/movie/${id}/similar`),
            axios.get(`/movie/${id}/videos`),
            axios.get(`/movie/${id}/watch/providers`),
            axios.get(`/movie/${id}/credits`)
        ]);

        dispatch(setMovieInfo({
            detail,
            externalIds,
            recommendations,
            similar,
            videos,
            watchProviders,
            credits
        }));
        dispatch(setLoading(false)); // Stop loading

    } catch (error) {
        console.log("Error:", error);
        dispatch(setError(error.message));
        dispatch(setLoading(false));
    }
};
