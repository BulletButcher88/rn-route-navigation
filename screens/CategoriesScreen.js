import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import { CATEGORIES, ARTICLES } from '../data/dummyData';
import RenderGridItem from '../components/RenderGridItem'

const CategoriesScreen = props => {

  const renderList = itemData => {
    return (
      <RenderGridItem
        title={itemData.item.title}
        color={itemData.item.color}
        image={itemData.item.image}
        description={itemData.item.description}
        onSelect={() => {
          props.navigation.navigate({
            routeName: 'CategoryMeals',
            params: {
              categoryId: itemData.item.id
            }
          });
        }} />
    )
  }

  const articleRender = artDetail => {
    return (
      <TouchableOpacity style={styles.displayBoxContainer}>
        <View style={{ ...styles.displayBox, backgroundColor: '#AAAAAA' }}>
          <Text>{artDetail.item.heading}</Text>
          <Text>{artDetail.item.article}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  return (
    <ScrollView>
      <View style={styles.welcomeTextContainer}>
        <Text style={styles.welcomeText}>Supporting the local music community, makes you a legend</Text>
      </View>

      <FlatList
        keyExtractor={(item, index) => item.id}
        horizontal={true}
        data={CATEGORIES}
        renderItem={renderList} />

      <FlatList
        keyExtractor={(item, index) => item.id}
        data={ARTICLES}
        renderItem={articleRender} />

    </ScrollView>
  )
}

CategoriesScreen.navigationOptions = {
  headerTitle: 'GIG GUIDE',
};

const styles = StyleSheet.create({
  welcomeTextContainer: {
    margin: 27
  },
  welcomeText: {
    fontSize: 27,
    color: '#A30232',
    fontFamily: 'roboto',
    flex: 1,
    paddingHorizontal: 10
  },
  displayBoxContainer: {
    flex: 1,
    marginHorizontal: 15,
    marginTop: 15,
  },
  displayBox: {
    flex: 1,
    padding: 15,
    height: 200,
    backgroundColor: "#fff",
    justifyContent: 'center',
    paddingBottom: 15,
  }
})

export default CategoriesScreen