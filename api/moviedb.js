import axios from "axios";
import {apiKey} from '../src/data';

const apiBaseUrl = 'https://api.themoviedb.org/3';
const trendingMoviesEndpoint = `${apiBaseUrl}/trending/movie/day?api_key=${apiKey}`

export const image500 = path=> path? `https://image.tmdb.org/t/p/w500${path}` : null;
export const image342 = path=> path? `https://image.tmdb.org/t/p/w342${path}` : null;
export const image185 = path=> path? `https://image.tmdb.org/t/p/w185${path}` : null;

const apiCall = async (endpoint, params)=>{
    const options = {
        method: 'GET',
        url: endpoint,
        params: params? params: {}
    }
    try{
        const response = await axios.request(options);
        return response.data;
    }catch(error){
        console.log('error: ', error);
        return{}
    }
}
export const fetchTrendingMovies = () =>{
    return apiCall(trendingMoviesEndpoint);
}