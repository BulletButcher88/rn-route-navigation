import React from 'react';
import { View, Text, Button, StyleSheet, FlatList } from 'react-native';
import { GIGS } from '../data/dummyData';

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

const CategoryMealsScreen = props => {
  const selectedCategory = getCategoryData(props)

  const renderItem = (itemData) => {
    return (
      <View><Text>{itemData.item.title}</Text></View>
    )
  }

  return (
    <View style={styles.screen}>
      <FlatList
        data={selectedCategory}
        keyExtractor={(item, index) => item.id}
        renderItem={renderItem} />

      <Button title="Go To Meals" onPress={() => {
        props.navigation.navigate('MealDetails')
      }} />
      <Button title="Go Back" onPress={() => {
        props.navigation.goBack()
      }} />
    </View>
  )
}


CategoryMealsScreen.navigationOptions = navigationData => {
  const navData = getCategoryData(navigationData)
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
    fontSize: 70,
    fontFamily: 'ambit-bold',
    padding: 20
  }
})

export default CategoryMealsScreen