import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import 'react-native-gesture-handler';
import {StackNavigators} from './presentation/navigations/StackNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <StackNavigators />
    </NavigationContainer>
  );
};

export default App;
