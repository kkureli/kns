import React, {useState} from 'react';
import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import styles from './styles';

const ListItem = ({item, navigation}) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('CardDetailScreen', {mechanic: item})}
      style={styles.listItem}>
      <Text>{item}</Text>
    </TouchableOpacity>
  );
};

export default ListItem;
