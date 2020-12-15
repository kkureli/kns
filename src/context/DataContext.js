import React from 'react';

const DataContext = React.createContext({
  data: {},
  setData: (data) => {},
});

export default DataContext;
