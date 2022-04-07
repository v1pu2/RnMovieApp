import React from 'react';

import TopMovieList from '../screens/TopMovieList';
import MovieDetail from '../screens/MovieDetail';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const TopRankStack = () => {
  return (
    <Stack.Navigator initialRouteName="TopRank">
      <Stack.Screen
        name="TopMovie"
        component={TopMovieList}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DetailsTopMovie"
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
export default TopRankStack;
