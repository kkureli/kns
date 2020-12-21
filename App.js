import * as React from 'react';
import DataContext from './src/context/DataContext';
import MainStackNavigator from './src/navigation/MainStackNavigator';

const App = () => {
  const [data, setData] = React.useState({});

  return (
    <DataContext.Provider value={{data, setData}}>
      <MainStackNavigator />
    </DataContext.Provider>
  );
};

export default App;
