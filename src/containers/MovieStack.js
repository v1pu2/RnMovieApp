import React from 'react';

import MovieDetail from '../screens/MovieDetail';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MovieList from '../screens/MovieList';

const Stack = createNativeStackNavigator();

const MovieStack = () => {
  return (
    <Stack.Navigator initialRouteName="MovieList">
      <Stack.Screen
        name="MovieList"
        component={MovieList}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Details"
        component={MovieDetail}
        options={{
          title: '',
          headerStyle: {
            backgroundColor: '#FFD300',
          },
        }}
      />
    </Stack.Navigator>
  );
};
export default MovieStack;
