import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';

const MovieCard = props => {
  const movie = props?.item;
  const baseImage = 'https://image.tmdb.org/t/p/w342';

  const imgUrl = baseImage + movie?.poster_path;
  return (
    <TouchableOpacity style={styles.cardContainer} onPress={props.onPress}>
      <View style={styles.rowView}>
        <View style={styles.imgView}>
          <Image
            style={styles.tinyLogo}
            source={{
              uri: `${imgUrl}`,
            }}
          />
        </View>
        <View style={styles.contentView}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.title}>{movie?.title}</Text>
            <Text style={styles.title} onPress={props.onClickDelete}>X</Text>
          </View>

          <View style={{flex: 1}}>
            <Text
              style={styles.desc}
              adjustsFontSizeToFit
              minimumFontScale={0.1}>
              {movie?.overview}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default MovieCard;
const styles = StyleSheet.create({
  cardContainer: {
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    // marginHorizontal: 20,
    marginTop: 9,
    height: 200,
    // backgroundColor: 'blue',
  },
  rowView: {
    flexDirection: 'row',
    padding: 10,
  },
  imgView: {
    justifyContent: 'flex-start',
    height: 170,
    width: 150,
    // backgroundColor: 'red',
    // marginRight: 10,
  },
  contentView: {
    paddingHorizontal: 10,
    flex: 1,
  },
  title: {
    fontSize: 18,
    color: 'black',
    marginBottom: 10,
    fontWeight: 'bold',
  },
  desc: {
    flexWrap: 'wrap',
    fontSize: 14,
    color: 'black',
  },
  tinyLogo: {
    width: 150,
    height: 170,
  },
});
