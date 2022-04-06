import React from 'react';

import TopMovieList from '../screens/TopMovieList';
import MovieDetail from '../screens/MovieDetail';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const TopRankStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="TopRank"
      screenOptions={{
        headerStyle: {backgroundColor: '#42f44b'},
        headerTintColor: '#fff',
        headerTitleStyle: {fontWeight: 'bold'},
      }}>
      <Stack.Screen
        name="TopMovie"
        component={TopMovieList}
        options={{title: 'Movie Page'}}
      />
      <Stack.Screen
        name="DetailsTopMovie"
        component={MovieDetail}
        options={{title: 'Details Page'}}
      />
    </Stack.Navigator>
  );
};
export default TopRankStack;
