import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';
import { ARTICLES } from '../data/dummyData'

const getData = itemData => {
  if (!itemData) {
    return
  }
  const catId = itemData.navigation.getParam('articleId')
  const articleData = ARTICLES.filter((article) => {
    return (article.id === catId)
  })
  return articleData
}

const ArticleScreen = props => {
  const articleDataProps = getData(props)
  const { author, imageUrl, date, heading, article } = articleDataProps[0]

  return (
    <View style={styles.screen}>
      <Text style={styles.headerText}>{heading}</Text>
      <Text style={styles.authorText}>{author}</Text>
      <Text style={styles.dateText}>{date}</Text>
      <Image style={styles.mainImage} source={{ uri: imageUrl }} />
      <Text style={styles.articleText}>{article}</Text>
      <Button title="Go back to TOP" onPress={() => {
        props.navigation.popToTop()
      }} />
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    height: "100%",
    padding: 5,
    alignItems: 'center',
    backgroundColor: 'black',
  },
  headerText: {
    fontSize: 30,
    color: 'white'
  },
  authorText: {
    width: "100%",
    fontSize: 20,
    color: 'white'
  },
  dateText: {
    color: 'white'
  },
  mainImage: {
    height: 200,
    width: "90%"
  },
  articleText: {
    fontSize: 20,
    color: 'white'
  }
})

export default ArticleScreen