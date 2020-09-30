import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, ScrollView, Image } from 'react-native';
import { CATEGORIES, ARTICLES } from '../data/dummyData';
import RenderGridItem from '../components/RenderGridItem'

const CategoriesScreen = props => {

  const renderCategories = itemData => {
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

  const renderArticle = artDetail => {
    return (
      <TouchableOpacity style={styles.articleBoxContainer} >
        <View style={styles.displayBox}>
          <Image
            source={{ uri: artDetail.item.imageUrl }}
            style={{
              ...styles.articleImageStyles
            }}
          />
          <Text style={styles.articleHeader}>{artDetail.item.heading}</Text>
          <View style={styles.articleContentContainer}>
            <Text style={styles.articleText}>{artDetail.item.article.substring(0, 180)}...... >></Text>
          </View>
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
        renderItem={renderCategories} />

      <FlatList
        horizontal={true}
        keyExtractor={(item, index) => item.id}
        data={ARTICLES}
        renderItem={renderArticle} />

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
    justifyContent: 'center',
    backgroundColor: 'black',
    borderRadius: 10,
    borderTopEndRadius: 50
  },
  articleHeader: {
    color: 'white',
    fontSize: 22,
    marginLeft: 20,
    position: 'absolute',
    top: 20
  },
  articleBoxContainer: {
    marginVertical: 10,
    marginHorizontal: 5,
  },
  articleImageStyles: {
    width: '100%',
    height: 100,
    opacity: 0.7,
    borderTopEndRadius: 50
  },
  articleContentContainer: {
    height: 120,
    width: 300,
    justifyContent: 'center'
  },
  articleText: {
    color: 'white',
    marginVertical: 10
  }
})

export default CategoriesScreen