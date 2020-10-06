import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import GigItem from '../components/GigItem';
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
    default: {
      return
    }
  }
}


const CategoryGigScreen = props => {
  const selectedCategory = getCategoryData(props)
  const categoryPageInfo = getCategoryPageInfo(props)


  const renderItem = (itemData) => {
    return (
      <View style={styles.pageContainer}>
        <GigItem {...itemData}
          onSelectGig={() => {
            props.navigation.navigate({
              routeName: 'GigDetails',
              params: {
                gigId: itemData.item.id
              }
            });
          }} />
      </View>
    )
  }

  return (
    <LinearGradient
      colors={[categoryPageInfo.color, 'transparent']}
      style={styles.linearGradient}
      start={{ x: 0.7, y: 0 }}
    >
      <FlatList
        data={selectedCategory}
        keyExtractor={(item, index) => item.id}
        renderItem={renderItem}
      />
    </LinearGradient>
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


const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 40,
    fontFamily: 'ambit-bold',
    padding: 20
  },
  pageContainer: {
    margin: 10
  }
})

export default CategoryGigScreen