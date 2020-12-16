import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  loading: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 20,
    position: 'absolute',
  },
});

export default styles;
