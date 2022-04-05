import React from 'react';
import {Platform} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TopRankStack from './TopRankStack';
import MovieStack from './MovieStack';

const Tab = createBottomTabNavigator();

const Navigators = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Movie"
        screenOptions={({route}) => ({
          headerShown: false,
          tabBarStyle: {
            height: 70,
            paddingTop: Platform?.OS === 'ios' ? 25 : 15,
            backgroundColor: '#FFD300',
            position: 'absolute',
            overflow: 'hidden',
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
          },
        })}
        tabBarOptions={{
          activeTintColor: 'black',
        }}>
        <Tab.Screen
          name="Movie"
          component={MovieStack}
          options={{
            tabBarLabel: 'Now Playing',
            // tabBarIcon: ({color, size}) => (
            //   <MaterialCommunityIcons name="home" color={color} size={size} />
            // ),
          }}
        />
        <Tab.Screen
          name="Topmovie"
          component={TopRankStack}
          options={{
            tabBarLabel: 'Top Rated',
            // tabBarIcon: ({color, size}) => (
            //   <MaterialCommunityIcons
            //     name="settings"
            //     color={color}
            //     size={size}
            //   />
            // ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigators;
