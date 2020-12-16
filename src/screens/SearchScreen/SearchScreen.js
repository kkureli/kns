import Axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TextInput,
  View,
  FlatList,
} from 'react-native';
import SEARCH_API from '../../api/SEARCH_API';
import Card from '../../components/Card/Card';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';

const SearchScreen = () => {
  const [input, setInput] = useState('');
  const [fetching, setFetching] = useState(false);
  const [cards, setCards] = useState([]);

  const searchCard = async (input) => {
    setFetching(true);
    try {
      const data = await Axios.get(SEARCH_API.baseURL + input, {
        headers: {
          'x-rapidapi-key': SEARCH_API.xRapidApiKey,
          'x-rapidapi-host': SEARCH_API.xRapidApiHost,
        },
      });
      setFetching(false);
      setCards(data.data);
    } catch (err) {
      setFetching(false);
    }
  };

  useEffect(() => {
    searchCard(input);
  }, [input]);

  const renderItem = (item) => <Card item={item} />;

  return (
    <>
      {fetching ? <LoadingSpinner /> : null}
      <TextInput
        placeholder="Search"
        style={styles.input}
        value={input}
        onChangeText={setInput}
      />
      <FlatList
        contentContainerStyle={{marginTop: 10}}
        keyExtractor={(item, index) => index.toString()}
        data={cards}
        renderItem={({item, index, separators}) => renderItem(item)}
      />
    </>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  input: {
    padding: 10,
    height: 50,
    width: 200,
    borderWidth: 1,
    alignSelf: 'center',
    marginTop: 10,
    borderRadius: 10,
  },
});
