import React, {useContext, useEffect, useState} from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  InteractionManager,
} from 'react-native';
import Card from '../../components/Card/Card';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import DataContext from '../../context/DataContext';

const CardDetailScreen = ({navigation, route}) => {
  const {data} = useContext(DataContext);
  const {mechanic} = route.params;
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    InteractionManager.runAfterInteractions(() => {
      setLoading(false);
    });
  }, []);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: mechanic,
    });
  }, [navigation, route?.params]);

  const findCards = () => {
    const matchedCards = [];
    Object.keys(data).map((e) => {
      return data[e].map((k) => {
        return k?.mechanics?.some((r) => r.name === mechanic)
          ? matchedCards.push(k)
          : null;
      });
    });
    setCards(matchedCards);
  };

  useEffect(() => {
    findCards();
  }, []);

  const renderItem = (item) => <Card item={item} />;

  return (
    <>
      {loading ? <LoadingSpinner /> : null}
      <FlatList
        contentContainerStyle={{marginTop: 20}}
        keyExtractor={(item, index) => index.toString()}
        data={cards}
        renderItem={({item, index, separators}) => renderItem(item)}
      />
    </>
  );
};

export default CardDetailScreen;

const styles = StyleSheet.create({});
