import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { CATEGORIES } from '../data/dummyData'

const getCategoryData = (navData) => {
  if (!navData) {
    return
  }
  const catId = navData.navigation.getParam('categoryId')
  const selectedCategory = CATEGORIES.find(cat => cat.id === catId)
  return (
    selectedCategory
  )
}

const CategoryMealsScreen = props => {
  const selectedCategory = getCategoryData(props)
  return (
    <View style={{ ...styles.screen, backgroundColor: selectedCategory.color }}>
      <Text style={styles.title}>{selectedCategory.title}</Text>
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
    headerTitleStyle: {
      fontWeight: 'bold',
      fontSize: 23
    },
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