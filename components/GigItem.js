import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native';
import DefaultBandText from '../components/DefaultBandText';

const GigItem = props => {
  const { performingArtist, title, venue, imageUrl, doorPrice, location } = props.item


  const artistList = (itemData, index) => {
    return (
      <View style={styles.artistNameContainer}>
        {itemData ? itemData.map((data, index) =>
          index < 3 ? <DefaultBandText
            key={index}
          >
            {data}
          </DefaultBandText> : null
        )
          : null}
      </View>
    )
  }

  return (
    <TouchableOpacity style={styles.cardContainer} onPress={props.onSelectGig}>
      <Text style={styles.titleStyle}>{title.toUpperCase()}</Text>
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
    marginVertical: 8,
    borderColor: 'purple',
    shadowOpacity: 0.45,
    shadowOffset: { width: 0, height: 5 },
    elevation: 4,
    borderRadius: 10,
    borderTopRightRadius: 60,
    borderBottomLeftRadius: 60,
    padding: 5
  },
  titleStyle: {
    fontFamily: 'roboto-bold',
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold'
  },
  venueDetailContainer: {
    flexDirection: 'row',
    width: "50%",
    justifyContent: 'space-between'
  },
  venueText: {
    fontSize: 18,
    color: 'grey',
  },
  posterUrl: {
    width: "100%",
    height: 190,
    borderBottomLeftRadius: 60

  },
  artistContainer: {
    width: '100%',
  },
  artistNameContainer: {
    flexDirection: 'row',
  }
})

export default GigItem;
