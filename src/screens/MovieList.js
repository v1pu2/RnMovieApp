import React, {useState} from 'react';

import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
} from 'react-native';

const MovieList = props => {
  const isDarkMode = useColorScheme() === 'dark';
  const [searchText, setSearchText] = useState('');
  const backgroundStyle = {
    backgroundColor: isDarkMode ? '#FFC30B' : '#FFC30B',
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
            color:'black'
          }}
        />
      </View>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View>
          <Text
            style={{color: isDarkMode ? '#ffffff' : '#000000'}}
            onPress={() => props.navigation.navigate('Details')}>
            this is app movielist
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  root: {
    flex: 1,
    backgroundColor: '#FFD300',
  },
});

export default MovieList;
