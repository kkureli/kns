import React, {useEffect, useState} from 'react';
import {TextInput, FlatList} from 'react-native';
import Card from '../../components/Card/Card';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import styles from './styles';
import axios from '../../api/axios';
import SEARCH_API_BASE_URL from '../../api/SEARCH_API_BASE_URL';
const SearchScreen = () => {
  const [input, setInput] = useState('');
  const [fetching, setFetching] = useState(false);
  const [cards, setCards] = useState([]);

  const searchCard = async (input) => {
    setFetching(true);
    try {
      const data = await axios.get(SEARCH_API_BASE_URL + input);
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
