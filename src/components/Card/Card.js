import React, {useEffect, useRef, useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Animated,
} from 'react-native';
import CardBack from '../CardBack/CardBackText';
import styles from './styles';

const Card = ({item}) => {
  const animate = useRef(new Animated.Value(0));
  const [isFlipped, setIsFlipped] = useState(false);

  const doAFlip = () => {
    Animated.timing(animate.current, {
      duration: 300,
      toValue: isFlipped ? 0 : 180,
      useNativeDriver: true,
    }).start(() => {
      setIsFlipped(!isFlipped);
    });
  };

  const interpolatedValueFront = animate.current.interpolate({
    inputRange: [0, 180],
    outputRange: ['0deg', '180deg'],
  });

  const interpolatedValueBack = animate.current.interpolate({
    inputRange: [0, 180],
    outputRange: ['180deg', '360deg'],
  });

  const rotateFront = {
    transform: [
      {
        rotateY: interpolatedValueFront,
      },
    ],
  };

  const rotateBack = {
    transform: [
      {
        rotateY: interpolatedValueBack,
      },
    ],
  };

  return (
    <>
      <Animated.View style={[styles.hidden, rotateFront, styles.card]}>
        <TouchableOpacity onPress={doAFlip}>
          <Image
            resizeMode="contain"
            style={styles.image}
            source={{uri: item.img}}
          />
        </TouchableOpacity>
      </Animated.View>
      <Animated.View
        style={[styles.hidden, styles.back, rotateBack, styles.card]}>
        <TouchableOpacity onPress={doAFlip}>
          <CardBack item={{...item}} />
        </TouchableOpacity>
      </Animated.View>
    </>
  );
};

export default Card;
