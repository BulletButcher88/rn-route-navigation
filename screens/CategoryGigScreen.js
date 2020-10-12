import React from 'react';
import { View, Text } from 'react-native';
import GigListComponent from '../components/GigListComponent'
import VenueMapScreen from '../screens/VenueMapScreen'
import { GIGS, CATEGORIES } from '../data/dummyData';

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
    headerTitle: navData.title,
    headerStyle: {
      backgroundColor: navData.color
    }
  }
}

export default CategoryGigScreen