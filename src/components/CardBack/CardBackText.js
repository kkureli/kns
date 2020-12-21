import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import PropTypes from 'prop-types';
const CardBack = ({item}) => {
  return Object.keys(item).map(function (key, index) {
    if (key === 'mechanics') {
      return (
        <View key={index.toString()}>
          {item[key].map((e, index) => {
            return index === 0 ? (
              <View key={index.toString()}>
                <Text>{key + ': '}</Text>
                <Text>
                  {index + 1}. {e.name}
                </Text>
              </View>
            ) : (
              <Text key={index.toString()}>{index + 1 + '. ' + e.name}</Text>
            );
          })}
        </View>
      );
    } else {
      return <Text key={index.toString()}>{key + ': ' + item[key]}</Text>;
    }
  });
};

CardBack.propTypes = {
  item: PropTypes.object.isRequired,
};

export default CardBack;

const styles = StyleSheet.create({});
