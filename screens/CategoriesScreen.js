import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, ScrollView, Image, ImageBackground } from 'react-native';
import { CATEGORIES, ARTICLES } from '../data/dummyData';
import RenderGridItem from '../components/RenderGridItem'
import ArticleGrid from '../components/ArticleGrid'
import SearchBar from '../components/SearchBar'
import Colors from '../constants/Colors';

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
      <ArticleGrid
        {...artDetail}
        onSelect={() => {
          props.navigation.navigate({
            routeName: 'Article',
            params: {
              articleId: artDetail.item.id
            }
          })
        }} />
    )
  }

  return (
    <ScrollView style={{ backgroundColor: Colors.backgroundWhite, opacity: 1 }}>
      <SearchBar />
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

      <TouchableOpacity
        style={{ backgroundColor: 'black', height: 320, width: "97%", borderTopRightRadius: 80, margin: 5, borderRadius: 10, padding: 15 }}>
        <Text style={{ color: 'white', fontSize: 22, marginTop: 10 }}>ANNOUNCEMENT</Text>
        <ImageBackground
          style={{ flex: 1, position: 'absolute', top: "20%", height: 250, width: '100%', justifyContent: 'center', alignItems: 'center', borderRadius: 80, opacity: 0.2, overflow: 'hidden' }}
          source={{ uri: 'https://i.pinimg.com/736x/32/d2/a0/32d2a0aa9a28fb233cf7f83c6a6cca2d.jpg' }} />
        <Text style={{ color: 'white', marginTop: 10, borderTopRightRadius: 20, fontSize: 14, margin: 15, marginTop: 20 }}>There are many variations of passages of Lorem Ipsum available,
        but the majority have suffered alteration in some form, by injected humour,
        or randomised words which don't look even slightly believable.
        If you are going to use a passage of Lorem Ipsum, you need to be sure there
        isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum
        generators on the Internet tend to repeat predefined chunks as necessary,
        making this the first true generator on the Internet. It uses a dictionary of
          over 200 Latin words</Text>
      </TouchableOpacity>
    </ScrollView>

  )
}

CategoriesScreen.navigationOptions = {
  headerTitle: 'YIDAKI',
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
  }
})

export default CategoriesScreen