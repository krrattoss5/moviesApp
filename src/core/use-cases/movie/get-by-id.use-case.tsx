import {HttpAdapter} from '../../../config/adapters/http/http.adapter';
import {MovieMapper} from '../../../infrastructure/mappers/movie.mappers';
import {FullMovie, MovieDBMovie} from '../../entities/movie.entity';

export const getMovieByIdUseCase = async (
  fetcher: HttpAdapter,
  movieId: number,
): Promise<FullMovie> => {
  try {
    const movie = await fetcher.get<MovieDBMovie>(`/${movieId}`);

    const fullMovie = MovieMapper.fromMovieDBToEntity(movie);

    return fullMovie;
  } catch (error) {
    throw new Error('Eror movie');
  }
};
