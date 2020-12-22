import React, {createContext, useReducer} from 'react';
import {dataReducer} from './Reducer';
import PropTypes from 'prop-types';

export const DataContext = createContext();

const DataContextProvider = ({children}) => {
  const [data, dispatch] = useReducer(dataReducer, {});

  return (
    <DataContext.Provider value={{data, dispatch}}>
      {children}
    </DataContext.Provider>
  );
};

DataContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DataContextProvider;
