import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { GIGS } from '../data/dummyData'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import CustomButton from '../components/CustomButton'

const GigDetailScreen = props => {
  const catId = props.navigation.getParam('gigId')
  return (
    <View style={styles.screen}>
      <Text>{catId}</Text>
      <Button title="Go back to TOP" onPress={() => {
        props.navigation.popToTop()
      }} />
    </View>
  )
}

GigDetailScreen.navigationOptions = navigationData => {
  const gigId = navigationData.navigation.getParam('gigId')
  const selectedGig = GIGS.filter((gig) => { return gig.id == gigId }
  )
  return {
    headerTitle: selectedGig[0].title,
    headerRight: () => {
      return (
        <HeaderButtons
          HeaderButtonComponent={CustomButton}>
          <Item
            title='Fav'
            iconName='ios-star'
            onPress={() => {
              console.log(selectedGig[0].title)
            }} />
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