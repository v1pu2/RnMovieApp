import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

const MovieList = props => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? '#FFC30B' : '#FFC30B',
  };

  return (
    // <SafeAreaView style={styles.root}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View
          style={{
            backgroundColor: isDarkMode ? '#FFC30B' : '#FFC30B',
          }}>
          <Text
            style={{color: isDarkMode ? '#ffffff' : '#000000'}}
            onPress={() => props.navigation.navigate('Details')}>
            this is app movielist
          </Text>
        </View>
      </ScrollView>
    // </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  root:{
      flex:1,
      backgroundColor:'red',
  }
});

export default MovieList;
