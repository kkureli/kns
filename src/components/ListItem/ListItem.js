import React, {useState} from 'react';
import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';
const ListItem = ({item, navigation}) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('CardDetailScreen', {mechanic: item})}
      style={styles.listItem}>
      <Text>{item}</Text>
    </TouchableOpacity>
  );
};

ListItem.propTypes = {
  item: PropTypes.string.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default ListItem;
