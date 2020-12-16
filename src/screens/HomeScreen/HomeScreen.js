import Axios from 'axios';
import React, {useContext, useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import API from '../../api/API';
import ListItem from '../../components/ListItem/ListItem';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import DataContext from '../../context/DataContext';
import styles from './styles';
const HomeScreen = ({navigation}) => {
  const {data, setData} = useContext(DataContext);
  const [loading, setLoading] = useState(false);
  const [mechanicsArray, setMechanicsArray] = useState([]);

  navigation.setOptions({
    headerRight: () => (
      <TouchableOpacity
        onPress={() => navigation.navigate('SearchScreen')}
        style={{marginRight: 10}}>
        <Text style={{fontWeight: 'bold', color: 'red'}}>Search</Text>
      </TouchableOpacity>
    ),
  });

  const fetchData = async () => {
    setLoading(true);
    try {
      const data = await Axios.get(API.baseURL, {
        headers: {
          'x-rapidapi-key': API.xRapidApiKey,
          'x-rapidapi-host': API.xRapidApiHost,
        },
      });

      setData(data.data);
      const mechanics = [];
      Object.keys(data.data).map((item) => {
        return data.data[item].map((e) => {
          return e?.mechanics?.map((k) => {
            return mechanics.push(k.name);
          });
        });
      });
      setMechanicsArray(mechanics);
      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const renderItem = (item) => <ListItem navigation={navigation} item={item} />;

  const uniq = (array) => {
    return [...new Set(array)];
  };

  if (loading) {
    return <LoadingSpinner />;
  } else {
    return (
      <SafeAreaView>
        <FlatList
          keyExtractor={(item, index) => index.toString()}
          data={uniq(mechanicsArray)}
          renderItem={({item, index, separators}) => renderItem(item)}
        />
      </SafeAreaView>
    );
  }
};

export default HomeScreen;
