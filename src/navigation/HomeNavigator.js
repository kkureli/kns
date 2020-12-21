import * as React from 'react';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import SearchScreen from '../screens/SearchScreen/SearchScreen';
import CardDetailScreen from '../screens/CardDetailScreen/CardDetailScreen';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const HomeNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="SearchScreen" component={SearchScreen} />
      <Stack.Screen name="CardDetailScreen" component={CardDetailScreen} />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
