import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { CATEGORIES } from '../data/dummyData'

const CategoryMealsScreen = props => {

  const catId = props.navigation.getParam('categoryId')

  const selectedCategory = CATEGORIES.find(cat => cat.id === catId)

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