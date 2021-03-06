import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import styles from './styles';

const LoadingSpinner = () => {
  return (
    <View style={styles.loading}>
      <ActivityIndicator size="large" color="red" />
    </View>
  );
};

export default LoadingSpinner;
