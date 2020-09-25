import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet, Image } from 'react-native'
import Colors from '../constants/Colors'

const RenderGridItem = props => {
  return (
    <View>
      <TouchableOpacity
        style={{ ...styles.girdItems, backgroundColor: props.color }}
        onPress={props.onSelect}>
        {props.image ? <Image
          style={styles.photoStyle}
          source={{ uri: props.image }}
        /> : null}
      </TouchableOpacity >
      <View style={styles.textContainer}>
        <Text style={styles.titleText}>{props.title}</Text>
        <Text style={styles.descriptionText}>{props.description}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  girdItems: {
    flex: 1,
    marginTop: 10,
    marginHorizontal: 10,
    height: 180,
    width: 300,
    borderRadius: 20,
  },
  textContainer: {
    marginLeft: 18,
    height: 80,
    maxWidth: 300
  },
  titleText: {
    marginTop: 5,
    fontSize: 20,
    color: 'black',
    fontFamily: 'roboto',
    color: Colors.fadedTextGrey
  },
  descriptionText: {
    marginVertical: 5,
    color: Colors.fadedTextGrey
  },
  photoStyle: {
    flex: 1,
    borderRadius: 20,
  }
})
export default RenderGridItem