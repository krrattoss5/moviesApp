// import {useRoute} from '@react-navigation/native';
import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {ScrollView, Text} from 'react-native';
import {RootStackParams} from '../../navigations/StackNavigator';
import {useMovie} from '../../hooks/useMovie';
import {MovieHeader} from '../../components/movie/MovieHeader';
import {MovieDetail} from '../../components/movie/MovieDetail';
import {FullScreenLoaders} from '../../components/loaders/FullScreenLoader';

interface Props extends StackScreenProps<RootStackParams, 'Details'> {}

const DetailsScreen = ({route}: Props) => {
  // Forma 1
  // const {movieId} = useRoute().params;
  const {movieId} = route.params;

  const {movie, isLoading, cast = []} = useMovie(movieId);

  if (isLoading) {
    return <FullScreenLoaders />;
  }

  return (
    <ScrollView>
      {/* Header */}
      <MovieHeader
        originalTitle={movie!.originalTitle}
        poster={movie!.poster}
        title={movie!.title}
      />

      {/* Details */}
      <MovieDetail movie={movie!} cast={cast} />
    </ScrollView>
  );
};

export default DetailsScreen;
