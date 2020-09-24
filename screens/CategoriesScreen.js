import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Platform } from 'react-native';
import Colors from '../constants/Colors'
import { CATEGORIES } from '../data/dummyData';

const CategoriesScreen = props => {
  const renderGridItem = itemData => {
    return (
      <TouchableOpacity
        style={{ ...styles.girdItems, backgroundColor: itemData.item.color }}
        onPress={() => {
          props.navigation.navigate({
            routeName: 'CategoryMeals',
            params: {
              categoryId: itemData.item.id
            }
          });
        }}>
        <Text>{itemData.item.title}</Text>
      </TouchableOpacity>
    )
  }

  return (
    <FlatList
      keyExtractor={(item, index) => item.id}
      numColumns={2}
      data={CATEGORIES}
      renderItem={renderGridItem} />
  )
}

CategoriesScreen.navigationOptions = {
  headerTitle: 'Meals Categories',
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : Colors.accentColor
  },
  headerTintColor: Platform.OS === 'android' ? Colors.accentColor : Colors.primaryColor,
  headerTitleStyle: {
    fontWeight: 'bold',
    fontSize: 23
  },
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  girdItems: {
    flex: 1,
    margin: 15,
    height: 150,
  }
})

export default CategoriesScreen