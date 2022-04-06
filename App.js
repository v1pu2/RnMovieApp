import React from 'react';

import {StatusBar} from 'react-native';
import Navigators from './src/containers/Navigators';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import MovieList from './src/screens/MovieList';
const App = () => {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="light-content" />
      <Navigators />
    </SafeAreaProvider>
  );
};

export default App;
