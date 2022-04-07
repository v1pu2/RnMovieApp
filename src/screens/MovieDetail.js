import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  ImageBackground,
} from 'react-native';
import moment from 'moment';


const MovieDetail = props => {
  const isDarkMode = useColorScheme() === 'dark';
  const movie = props?.route?.params?.item;
  const backgroundStyle = {
    backgroundColor: isDarkMode ? '#000000' : '#ffffff',
  };
  const baseImage = 'https://image.tmdb.org/t/p/original';

  const imgUrl = baseImage + movie?.backdrop_path;


  return (
    <ImageBackground
      source={{uri: `${imgUrl}`}}
      resizeMode="cover"
      style={styles.image}>
      <View style={styles.textView}>
        <Text style={styles.textTitle}>{movie?.title}</Text>
        <Text style={styles.txtPercentage}>
          {moment(movie?.release_date).format('MMMM DD, YYYY')}
        </Text>
        <View style={styles.rowView}>
          <Text style={[styles.txtPercentage, {paddingRight: 60}]}>
            {movie?.vote_average}%
          </Text>
          <Text style={styles.txtPercentage}>2 hr 30 min</Text>
        </View>
        <Text style={styles.txtPercentage}>{movie?.overview}</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  image: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  textView: {
    width: '90%',
    backgroundColor: '#000000c0',
    alignSelf: 'center',
    paddingBottom: 80,
    padding: 10,
  },
  textTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  rowView: {
    flexDirection: 'row',
  },
  txtPercentage: {
    color: 'white',
    fontSize: 14,
    marginBottom: 10,
  },
});

export default MovieDetail;
