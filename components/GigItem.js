import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native';

const GigItem = props => {
  const { performingArtist, title, venue, imageUrl, doorPrice, location } = props.item


  const artistList = (itemData, index) => {
    return (
      <View style={styles.artistNameContainer}>
        {itemData ?
          itemData.map((data, index) => <Text
            key={index}
            style={styles.artistNameText}
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
      <View style={styles.artistContainer}>
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
    backgroundColor: 'black',
    marginVertical: 2
  },
  titleStyle: {
    fontFamily: 'roboto-bold',
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold'
  },
  venueDetailContainer: {
    flex: 1,
    flexDirection: 'row',
    width: "50%",
    justifyContent: 'space-between'
  },
  venueText: {
    fontSize: 18,
    color: 'grey',
  },
  posterUrl: {
    width: 370,
    height: 170
  },
  artistContainer: {
    flex: 1,
    width: '100%',
    justifyContent: "center"
  },
  artistNameContainer: {
    flexDirection: 'row',
  },
  artistNameText: {
    flex: 1,
    justifyContent: 'space-around',
    marginHorizontal: 2,
    padding: 2,
    color: 'white',
    fontFamily: 'roboto-bold'
  }
})

export default GigItem;
