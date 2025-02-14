import {THE_MOVIE_DB_KEY} from '@env';
import {AxiosAdapter} from './http/axios.adapter';

export const movieDBFetcher = new AxiosAdapter({
  baseUrl: 'https://api.themoviedb.org/3/movie',
  params: {
    // api_key: '563fd76eee5d69ab733fa0c219f72977',
    api_key: THE_MOVIE_DB_KEY,
    language: 'es',
  },
});
