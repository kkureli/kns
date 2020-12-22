import * as React from 'react';
import DataContextProvider from './src/context/DataContext';
import AppNavigator from './src/navigation/AppNavigator';

const App = () => {
  return (
    <DataContextProvider>
      <AppNavigator />
    </DataContextProvider>
  );
};

export default App;
