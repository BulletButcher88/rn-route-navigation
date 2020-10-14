import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, ScrollView, Button, ImageBackground } from 'react-native';
import { CATEGORIES, ARTICLES } from '../data/dummyData';
import RenderGridItem from '../components/RenderGridItem';
import ArticleGrid from '../components/ArticleGrid';
import SearchBar from '../components/SearchBar';

import { LinearGradient } from 'expo-linear-gradient';
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
            routeName: 'CategoryScreen',
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
    <LinearGradient
      colors={[Colors.accentColor, 'transparent']}
      style={styles.linearGradient}
      start={{ x: 0.7, y: 0 }}
    >
      <ScrollView >
        <SearchBar />

        <View style={styles.welcomeTextContainer}>
          <Text style={styles.welcomeText}>Supporting local music is legendary</Text>
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
          style={{ backgroundColor: 'black', height: 240, width: "97%", borderTopRightRadius: 80, margin: 5, borderRadius: 10, padding: 15 }}>
          <Text style={{ color: 'white', fontSize: 22, marginTop: 10 }}>ANNOUNCEMENT</Text>
          <ImageBackground
            style={{ flex: 1, position: 'absolute', top: "20%", height: 200, width: '100%', justifyContent: 'center', alignItems: 'center', borderRadius: 80, opacity: 0.2, overflow: 'hidden' }}
            source={{ uri: 'https://i.pinimg.com/736x/32/d2/a0/32d2a0aa9a28fb233cf7f83c6a6cca2d.jpg' }} />
          <Text style={{ color: 'white', marginTop: 10, borderTopRightRadius: 20, fontSize: 14, margin: 15, marginTop: 20 }}>
            Due to the pandemic shutdowns and restrictions around 75% for those employed in the creative and performing arts have lost their work. Please help us to keep the community of live musicians, venues and punters alive.
          </Text>
          <Button title="DONATE" />
        </TouchableOpacity>
      </ScrollView>
    </LinearGradient>

  )
}


const styles = StyleSheet.create({
  welcomeTextContainer: {
    margin: 27
  },
  welcomeText: {
    fontSize: 27,
    color: '#A30232',
    fontFamily: 'roboto',
    flex: 1,
    paddingHorizontal: 10,
    lineHeight: 44,
  },
  linearGradient: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
})

export default CategoriesScreen