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
  ActivityIndicator,
} from 'react-native';
import {getMovies} from '../services/ApiService';
import MovieCard from '../components/MovieCard';

const MovieList = props => {
  const isDarkMode = useColorScheme() === 'dark';
  const [searchText, setSearchText] = useState('');
  const [allMovies, setAllMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
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
        setAllMovies(response?.data?.results);
        setFilteredMovies(response?.data?.results);
      }
    } catch (error) {
      Alert.alert('No API Response');
    }
  };
  useEffect(() => {
    callApi();
  }, []);
  const onCardClick = item => {
    props.navigation.navigate('Details', {item});
  };
  const onClickDelete = item => {
    const newArr = filteredMovies.filter(data => data?.id !== item?.id);
    setFilteredMovies(newArr);
    setAllMovies(newArr);
  };
  const renderEventItem = item => {
    return (
      <MovieCard
        item={item?.item}
        onPress={() => onCardClick(item?.item)}
        onClickDelete={() => onClickDelete(item?.item)}
      />
    );
  };
  const handleSearch = text => {
    if (text) {
      const filteredData = allMovies.filter(function (item) {
        const itemData = item.title
          ? item.title.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredMovies(filteredData);
      setSearchText(text);
    } else {
      setFilteredMovies(allMovies);
      setSearchText(text);
    }
  };
  return (
    <SafeAreaView style={styles.root}>
      <View
        style={{
          height: 70,
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <TextInput
          placeholder="Search"
          autoCapitalize="none"
          autoCorrect={false}
          clearButtonMode="always"
          value={searchText}
          placeholderTextColor={'black'}
          onChangeText={queryText => handleSearch(queryText)}
          style={styles.input}
        />
        {searchText !== '' && (
          <Text
            style={styles.txtCancel}
            onPress={() => {
              setFilteredMovies(allMovies);
              setSearchText('');
            }}>
            Cancel
          </Text>
        )}
      </View>

      <FlatList
        pagingEnabled={true}
        legacyImplementation={false}
        showsVerticalScrollIndicator={false}
        data={filteredMovies}
        renderItem={item => renderEventItem(item)}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#FFD300',
    paddingBottom: 50,
  },
  input: {
    fontSize: 16,
    margin: 10,
    flex: 1,
    height: 50,
    backgroundColor: 'white',
    borderRadius: 10,
    color: 'black',
    padding: 10,
  },
  txtCancel: {
    paddingRight: 10,
    fontSize: 14,
  },
});

export default MovieList;
