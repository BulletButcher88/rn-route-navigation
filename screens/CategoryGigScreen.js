import React from 'react';
import { useSelector } from 'react-redux'
import { View, Text } from 'react-native';
import GigListComponent from '../components/GigListComponent'
import VenueMapScreen from '../screens/VenueMapScreen'

import { CATEGORIES } from '../data/dummyData';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomButton from '../components/CustomButton';
import LinearGradientComponent from '../components/LinearGradientComponent'

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
  const availableGigs = useSelector(state => state.gigs.filterGigs)
  const displayGigs = availableGigs.filter((gig) => {
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

    if (selectedCategory.length === 0) {
      return (
        <LinearGradientComponent
          colors={categoryPageInfo.color}
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontSize: 18, color: 'white' }}>No gigs found, try changing the filters</Text>
        </LinearGradientComponent>
      )
    }
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