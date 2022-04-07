import React, {useState, useEffect} from 'react';

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
import MovieCard from '../components/MovieCard';
import {getTopRanked} from '../services/ApiService';

const TopMovieList = props => {
  const isDarkMode = useColorScheme() === 'dark';
  const [searchText, setSearchText] = useState('');
  const [allTopMovies, setAllTopMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filteredMovies, setFilteredMovies] = useState([]);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? '#FFC30B' : '#FFC30B',
  };

  const callApi = async () => {
    try {
      const response = await getTopRanked();
      if (
        response?.status === 200 &&
        response?.data?.results &&
        response?.data?.results.length > 0
      ) {
        setIsLoading(false);
        setAllTopMovies(response?.data?.results);
        setFilteredMovies(response?.data?.results);
      }
    } catch (error) {
      Alert.alert('No API Response');
    }
  };
  const handleSearch = text => {
    if (text) {
      const filteredData = allTopMovies.filter(function (item) {
        const itemData = item.title
          ? item.title.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredMovies(filteredData);
      setSearchText(text);
    } else {
      setFilteredMovies(allTopMovies);
      setSearchText(text);
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
    setAllTopMovies(newArr);
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
  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.headerView}>
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
              setFilteredMovies(allTopMovies);
              setSearchText('');
            }}>
            Cancel
          </Text>
        )}
      </View>

      <FlatList
        pagingEnabled={true}
        data={filteredMovies}
        renderItem={item => renderEventItem(item)}
        keyExtractor={item => item.id}
        legacyImplementation={false}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#FFD300',
    paddingBottom:50
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
  headerView: {
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  txtCancel: {
    paddingRight: 10,
    fontSize: 14,
  },
});

export default TopMovieList;
