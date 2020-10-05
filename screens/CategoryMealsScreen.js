import React from 'react';
import { View, Text, Button, StyleSheet, FlatList } from 'react-native';
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


const CategoryMealsScreen = props => {
  const selectedCategory = getCategoryData(props)
  const categoryPageInfo = getCategoryPageInfo(props)


  const renderItem = (itemData) => {
    return (
      <View>
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
    <View style={{ ...styles.screen, backgroundColor: categoryPageInfo.color }}>
      <FlatList
        data={selectedCategory}
        keyExtractor={(item, index) => item.id}
        renderItem={renderItem}
      />

      <Button title="Go Back" onPress={() => {
        props.navigation.goBack()
      }} />
    </View>
  )
}


CategoryMealsScreen.navigationOptions = navigationData => {
  const navData = getCategoryPageInfo(navigationData)
  return {
    headerTitle: navData.title,
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
  }
})

export default CategoryMealsScreen