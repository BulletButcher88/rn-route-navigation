import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Image } from 'react-native'

const RenderGridItem = props => {
  return (
    <TouchableOpacity
      style={{ ...styles.girdItems, backgroundColor: props.color }}
      onPress={props.onSelect}>
      <Image
        style={styles.photoStyle}
        source={{ uri: props.image }}
      />
      <Text style={styles.titleText}>{props.title}</Text>
    </TouchableOpacity >
  )
}

const styles = StyleSheet.create({
  girdItems: {
    flex: 1,
    margin: 10,
    height: 180,
    width: 300,
    borderRadius: 20,
  },
  titleText: {
    flex: 1,
    fontSize: 22,
    color: 'white',
    alignSelf: 'center',
    position: 'absolute',
    bottom: '40%',
    fontFamily: 'ambit-bold'
  },
  photoStyle: {
    flex: 1,
    borderRadius: 20,
  }
})
export default RenderGridItem