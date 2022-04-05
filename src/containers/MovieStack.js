import React from 'react';

import MovieDetail from '../screens/MovieDetail';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MovieList from '../screens/MovieList';

const Stack = createNativeStackNavigator();

const MovieStack = () => {
    return (
        <Stack.Navigator
          initialRouteName="Movie"
        //   screenOptions={{
        //     headerStyle: { backgroundColor: '#42f44b' },
        //     headerTintColor: '#fff',
        //     headerTitleStyle: { fontWeight: 'bold' }
        //   }}
          >
          <Stack.Screen
            name="Movie"
            component={MovieList}
            options={{headerShown: false}}/>
          <Stack.Screen
            name="Details"
            component={MovieDetail}
            options={{ title: 'Details Page' }} />
        </Stack.Navigator>
    );
};
export default MovieStack;
