import React from 'react';
import {Platform} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TopRankStack from './TopRankStack';
import MovieStack from './MovieStack';
import MaterialCommunityIcons from 'react-native-vector-icons';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
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
            paddingTop: Platform?.OS === 'ios' ? 15 : 10,
            paddingBottom:5,
            backgroundColor: '#FFD300',
            position: 'absolute',
            overflow: 'hidden',
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
          },
          activeTintColor: 'black',
        })}>
        <Tab.Screen
          name="Movie"
          component={MovieStack}
          options={{
            tabBarLabel: 'Now Playing',
            tabBarLabelStyle: {
              fontSize: 16,
            },
            // tabBarIcon: ({color, size}) => (
            //   <MaterialCommunityIcons name="home" color={'red'} size={size} />
            // ),
          }}
        />
        <Tab.Screen
          name="Topmovie"
          component={TopRankStack}
          options={{
            tabBarLabel: 'Top Rated',
            tabBarLabelStyle: {
              fontSize: 16,
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigators;
