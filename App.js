import * as React from 'react';
import DataContext from './src/context/DataContext';
import AppNavigator from './src/navigation/AppNavigator';

const App = () => {
  const [data, setData] = React.useState({});

  return (
    <DataContext.Provider value={{data, setData}}>
      <AppNavigator />
    </DataContext.Provider>
  );
};

export default App;
