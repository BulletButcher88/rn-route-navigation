import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet, Image } from 'react-native'

const RenderGridItem = props => {
  return (
    <View>
      <TouchableOpacity
        style={{ ...styles.girdItems, backgroundColor: props.color }}
        onPress={props.onSelect}>
        <Image
          style={styles.photoStyle}
          source={{ uri: props.image }}
        />
      </TouchableOpacity >
      <View style={styles.textContainer}>
        <Text style={styles.titleText}>{props.title}</Text>
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
    height: 80
  },
  titleText: {
    flex: 1,
    fontSize: 20,
    color: 'black',
    position: 'absolute',
    top: '10%',
    fontFamily: 'roboto'
  },
  photoStyle: {
    flex: 1,
    borderRadius: 20,
  }
})
export default RenderGridItem