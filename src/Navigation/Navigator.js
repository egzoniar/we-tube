import React from 'react';
import { View } from 'react-native'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/Home/HomeScreen';
import PlayerScreen from '../screens/Player/PlayerScreen';
import LibraryScreen from '../screens/Library/LibraryScreen';
import FloatingBar from './Floating-Bar/FloatingBar';

const Tab = createBottomTabNavigator()


const Navigator = () => (
  <NavigationContainer>
    <Tab.Navigator
      tabBar={props => <FloatingBar {...props} />}
      initialRouteName="Home"
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Library" component={LibraryScreen} />
      <Tab.Screen name="Player" component={PlayerScreen} />
      {/* <Tab.Screen name="Save" component={PlayerScreen} /> */}
    </Tab.Navigator>
  </NavigationContainer>
)

export default Navigator;