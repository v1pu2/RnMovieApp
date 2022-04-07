import React, {useState, useEffect} from 'react';
import axios from 'axios';

import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  Alert,
  FlatList,
} from 'react-native';
import {getMovies} from '../services/ApiService';
import MovieCard from '../components/MovieCard';

const MovieList = props => {
  const isDarkMode = useColorScheme() === 'dark';
  const [searchText, setSearchText] = useState('');
  const [allMovies, setAllMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? '#FFC30B' : '#FFC30B',
  };
  const callApi = async () => {
    try {
      const response = await getMovies();
      if (
        response?.status === 200 &&
        response?.data?.results &&
        response?.data?.results.length > 0
      ) {
        setIsLoading(false);
        console.log(response?.data?.results?.length);
        setAllMovies(response?.data?.results);
      }
    } catch (error) {
      console.log('error', error);
      Alert.alert('No API Response');
    }
  };
  useEffect(() => {
    callApi();
  }, []);
  const onCardClick = item => {
    props.navigation.navigate('Details', {item});
  };
  const renderEventItem = item => {
    return (
      <MovieCard item={item?.item} onPress={() => onCardClick(item?.item)} />
    );
  };
  return (
    <SafeAreaView style={styles.root}>
      <View
        style={{height: 70, justifyContent: 'center', alignItems: 'center'}}>
        <TextInput
          placeholder="Search"
          placeholderTextColor={'black'}
          onChangeText={text => setSearchText(text)}
          style={{
            fontSize: 16,
            margin: 10,
            width: '90%',
            height: 50,
            backgroundColor: 'white',
            borderRadius: 10,
            color: 'black',
            padding: 10,
          }}
        />
      </View>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View>
          <FlatList
            pagingEnabled={true}
            data={allMovies}
            renderItem={item => renderEventItem(item)}
            keyExtractor={item => item.id}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#FFD300',
  },
});

export default MovieList;
