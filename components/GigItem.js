import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native';

const GigItem = props => {
  const { performingArtist, title, venue, imageUrl, doorPrice, location } = props.item


  const artistList = (itemData, index) => {
    return (
      <View style={styles.artistContainer}>
        {itemData ?
          itemData.map((data, index) => <Text
            key={index}
            style={styles.artistList}
          >
            {data}
          </Text>) : null}
      </View>
    )
  }

  return (
    <TouchableOpacity style={styles.cardContainer} onPress={props.onSelectGig}>
      <Text style={styles.titleStyle}>{title}</Text>
      <View style={styles.venueDetailContainer}>
        <Text style={styles.venueText}>{venue}</Text>
        <Text style={styles.venueText}>$ {doorPrice}</Text>
        {/* <Text>{location}</Text> */}
      </View>
      <View style={styles.venueDetailContainer}>
        {artistList(performingArtist)}
      </View>
      <Image source={{ uri: imageUrl }} style={styles.posterUrl} />
    </TouchableOpacity>

  )
}

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    padding: 15,
    width: 350,
    backgroundColor: 'white'
  },
  titleStyle: {
    fontFamily: 'roboto-bold',
    fontSize: 25,
    color: 'pink',
    fontWeight: 'bold'
  },
  venueDetailContainer: {
    width: '100%',
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-around'
  },
  venueText: {
    fontSize: 18,
    color: 'grey'
  },
  posterUrl: {
    width: 360,
    height: 170
  },
  artistContainer: {
    flex: 1,
    flexDirection: 'row'
  },
  artistList: {
    flex: 1,
    padding: 2,
    justifyContent: 'space-around',
    margin: 5,
    fontFamily: 'roboto-bold'
  }
})

export default GigItem;
