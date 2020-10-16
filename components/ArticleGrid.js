import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native'

const ArticleGrid = props => {
  return (
    <TouchableOpacity onPress={props.onSelect} style={styles.articleBoxContainer} >
      <View style={styles.displayBox}>
        <Image
          source={{ uri: props.item.imageUrl }}
          style={{
            ...styles.articleImageStyles
          }}
        />
        <Text style={styles.articleHeader}>{props.item.heading}</Text>
        <View style={styles.articleContentContainer}>
          <Text style={styles.articleText}>{props.item.article.substring(0, 180)}...... >></Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({

  displayBoxContainer: {
    flex: 1,
    marginHorizontal: 15,
    marginTop: 15,
  },
  displayBox: {
    flex: 1,
    padding: 18,
    justifyContent: 'center',
    backgroundColor: 'black',
    borderRadius: 10,
    borderTopRightRadius: 60,
    borderBottomLeftRadius: 50
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
    borderTopRightRadius: 50
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

export default ArticleGrid