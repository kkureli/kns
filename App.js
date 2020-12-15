import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen/HomeScreen';
import DataContext from './src/context/DataContext';
import CardDetailScreen from './src/screens/CardDetailScreen/CardDetailScreen';
import SearchScreen from './src/screens/SearchScreen/SearchScreen';

const Stack = createStackNavigator();

const App = () => {
  const [data, setData] = React.useState({});

  return (
    <DataContext.Provider value={{data, setData}}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="SearchScreen" component={SearchScreen} />
          <Stack.Screen name="CardDetailScreen" component={CardDetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </DataContext.Provider>
  );
};

export default App;
