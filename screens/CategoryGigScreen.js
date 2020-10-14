import React from 'react';
// import { View, Text } from 'react-native';
import GigListComponent from '../components/GigListComponent'
import VenueMapScreen from '../screens/VenueMapScreen'
import { GIGS, CATEGORIES } from '../data/dummyData';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomButton from '../components/CustomButton';

const getCategoryPageInfo = navData => {
  const catId = navData.navigation.getParam('categoryId')
  const categoryPath = CATEGORIES.find((cat) => cat.id === catId)
  return categoryPath
}

const getCategoryData = (navData) => {
  if (!navData) {
    return
  }
  const catId = navData.navigation.getParam('categoryId')
  const displayGigs = GIGS.filter((gig) => {
    return gig.categoryId.indexOf(catId) >= 0
  }
  )
  return (
    displayGigs
  )
}

const CategoryGigScreen = props => {
  const selectedCategory = getCategoryData(props)
  const categoryPageInfo = getCategoryPageInfo(props)

  if (categoryPageInfo.id == 'c1') {
    return (
      <GigListComponent colors={categoryPageInfo.color} gigData={selectedCategory} {...props} />
    )
  }
  if (categoryPageInfo.id == 'c2') {
    return <VenueMapScreen colors={categoryPageInfo.color} {...props} />
  }
}


CategoryGigScreen.navigationOptions = navigationData => {
  const navData = getCategoryPageInfo(navigationData)
  return {
    headerStyle: {
      backgroundColor: navData.color
    },
    headerLeft: () => {
      return (
        <HeaderButtons HeaderButtonComponent={CustomButton}>
          <Item title='Menu' iconName='ios-settings' onPress={() => {
            navigationData.navigation.toggleDrawer()
          }} />
        </HeaderButtons>)
    }
  }
}


export default CategoryGigScreen