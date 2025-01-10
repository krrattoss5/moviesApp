import {HttpAdapter} from '../../../config/adapters/http/http.adapter';
import {NowPlayingResponse} from '../../../infrastructure/interfaces/movie-db.responses';
import {Movie} from '../../entities/movie.entity';

export const moviesNowPlayingUseCase = async (
  fetcher: HttpAdapter,
): Promise<Movie[]> => {
  try {
    // const nowPlaying = await fetcher.get<Record<string,any>('/now_playing');
    const nowPlaying = await fetcher.get<NowPlayingResponse>('/now_playing');

    console.log({nowPlaying});

    return [];
  } catch (error) {
    console.log(error);

    throw new Error('Error fetching movies - NowPlaying');
  }
};
