import {useEffect, useState} from 'react';
import {Movie} from '../../core/entities/movie.entity';

import * as UseCases from '../../core/use-cases/index';
import {movieDBFetcher} from '../../config/adapters/movieDB.adapter';

export const useMovies = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [nowPlaying, setNowPlaying] = useState<Movie[]>([]);
  const [upcoming, setUpcoming] = useState<Movie[]>([]);
  const [topRating, setTopRating] = useState<Movie[]>([]);
  const [popular, setPopular] = useState<Movie[]>([]);

  useEffect(() => {
    initialLoad();
  }, []);

  const initialLoad = async () => {
    const nowPlayingPromise = await UseCases.moviesNowPlayingUseCase(
      movieDBFetcher,
    );
    const upcomingPromise = await UseCases.moviesUpcomingUseCase(
      movieDBFetcher,
    );
    const topRatedPromise = await UseCases.moviesTopRatedUseCase(
      movieDBFetcher,
    );
    const popularPromise = await UseCases.moviesPopularUseCase(movieDBFetcher);

    const [nowPlayingMovies, upcomingMovies, topRatedMovies, popularMovies] =
      await Promise.all([
        nowPlayingPromise,
        upcomingPromise,
        topRatedPromise,
        popularPromise,
      ]);

    setNowPlaying(nowPlayingMovies);
    setUpcoming(upcomingMovies);
    setTopRating(topRatedMovies);
    setPopular(popularMovies);
    setIsLoading(false);
  };

  return {
    isLoading,
    nowPlaying,
    upcoming,
    topRating,
    popular,
  };
};
