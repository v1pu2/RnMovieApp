import React from 'react';

import {StatusBar} from 'react-native';
import Navigators from './src/containers/Navigators';
import {SafeAreaProvider} from 'react-native-safe-area-context';
const App = () => {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="light-content" backgroundColor="#FFD300"/>
      <Navigators />
    </SafeAreaProvider>
  );
};

export default App;
