import React from 'react';
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
  switch (catId) {
    case 'c1':
      return (
        displayGigs
      )
    case 'c2':
      return
    default: {
      return
    }
  }
}

const CategoryGigScreen = props => {
  const selectedCategory = getCategoryData(props)
  const categoryPageInfo = getCategoryPageInfo(props)

  return (
    <GigListComponent colors={categoryPageInfo.color} gigData={selectedCategory} {...props} />
  )
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