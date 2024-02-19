import { createSlice } from "@reduxjs/toolkit";
import { fetchTrendingMovies } from "../../api/moviedb";

const initialState = {
    movies: [],
    selectedMovie: null,
};

export const movieSlice = createSlice({
    name: 'movies',
    initialState: initialState,
    reducers: {
        setSelectedMovie: (state, action) => {
            const movieId = action.payload;
            state.selectedMovie = state.movies.find((p) => p.id === movieId);
        },
        setMovies: (state, action) => {
            state.movies = action.payload;
        },
    },
});

export const { setSelectedMovie, setMovies } = movieSlice.actions;

export const fetchMoviesAsync = () => async (dispatch) => {
    try {
        const movies = await fetchTrendingMovies();
        dispatch(setMovies(movies.results));
    } catch (error) {
        console.log('Error fetching trending movies: ', error);
    }
};

export default movieSlice.reducer;
