import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleFavorite } from '../store/actions/gigs'
import { View, Text, Button, StyleSheet, Image, ScrollView } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import CustomButton from '../components/CustomButton';
import DefaultBandText from '../components/DefaultBandText'

const GigDetailScreen = props => {
  const gigList = useSelector(state => state.gigs.gigs)
  const gigId = props.navigation.getParam('gigId')
  const currentFavoriteGig = useSelector(state => state.gigs.favoriteGigs.some(gig => gig.id === gigId))

  const selectedGig = gigList.find((gig) => { return gig.id == gigId })

  const dispatch = useDispatch()

  const toggleFavoriteHandler = useCallback(() => {
    dispatch(toggleFavorite(gigId))
  }, [dispatch, gigId])

  useEffect(() => {
    props.navigation.setParams({
      toggleFav: toggleFavoriteHandler
    })
  }, [toggleFavoriteHandler])

  useEffect(() => {
    props.navigation.setParams({
      isFav: currentFavoriteGig
    })
  }, [currentFavoriteGig])

  return (
    <ScrollView contentContainerStyle={styles.screen}>
      <Image
        source={{ uri: selectedGig.imageUrl }}
        style={styles.gigImage} />
      <View style={styles.titleContainer}>
        <DefaultBandText style={styles.headerText}>{selectedGig.title}</DefaultBandText>
      </View>
      <View style={styles.venueBookingDetails}>
        <DefaultBandText>{selectedGig.venue}</DefaultBandText>
        <DefaultBandText> $ {selectedGig.doorPrice}</DefaultBandText>
        <DefaultBandText>{selectedGig.date}</DefaultBandText>
      </View>
      <View style={styles.descriptionText}>
        <DefaultBandText >{selectedGig.description}</DefaultBandText>
      </View>
    </ScrollView >
  )
}

GigDetailScreen.navigationOptions = navigationData => {
  const selectedTitle = navigationData.navigation.getParam('selectedGigTitle')
  const toggleFavoriteFunction = navigationData.navigation.getParam('toggleFav')
  const isCurrentFavorite = navigationData.navigation.getParam('isFav')

  return {
    headerTitle: selectedTitle,
    headerRight: () => {
      return (
        <HeaderButtons
          HeaderButtonComponent={CustomButton}>
          <Item
            title='Save'
            iconName={isCurrentFavorite ? 'ios-star' : 'ios-star-outline'}
            onPress={toggleFavoriteFunction} />
        </HeaderButtons>)
    }
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'flex-start'
  },
  gigImage: {
    alignItems: 'center',
    margin: 15,
    width: "90%",
    height: "30%",
  },
  titleContainer: {
    alignItems: 'flex-end',
    height: 60

  },
  headerText: {
    fontSize: 23,
    paddingRight: 20,
  },
  venueBookingDetails: {
    height: 90,
    padding: 0,
    margin: 0
  },
  descriptionText: {
    width: 320,
    height: "100%"
  }
})

export default GigDetailScreen