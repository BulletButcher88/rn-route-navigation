import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleFavorite } from '../store/actions/gigs'
import { View, Text, Button, StyleSheet, ImageBackground } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import CustomButton from '../components/CustomButton'

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
    <View style={styles.screen}>
      <ImageBackground
        source={{ uri: selectedGig.imageUrl }}
        style={{ width: "100%", height: 600, position: 'absolute', top: 0 }} />
      <Text>{selectedGig.title}</Text>
      <Button title="Go back to TOP" onPress={() => {
        props.navigation.popToTop()
      }} />
    </View>
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
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default GigDetailScreen