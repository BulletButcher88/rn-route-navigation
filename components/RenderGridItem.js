import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet, Image, Platform } from 'react-native'
import { TouchableNativeFeedback } from 'react-native-gesture-handler';
import Colors from '../constants/Colors'

const RenderGridItem = props => {
  let TouchableCmp = TouchableOpacity

  if (Platform.OS == 'android' && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback
  }
  return (
    <View>
      <TouchableCmp
        style={{ ...styles.girdItems, backgroundColor: props.color }}
        onPress={props.onSelect}>
        {props.image ? <Image
          style={styles.photoStyle}

          source={{ uri: props.image }}
        /> : null}
      </TouchableCmp >

      <View style={styles.textContainer}>
        <Text style={styles.titleText} numberOfLines={2}>{props.title}</Text>
        <Text style={styles.descriptionText}>{props.description}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  girdItems: {
    flex: 1,
    margin: 5,
    marginHorizontal: 10,
    height: 180,
    width: 300,
    borderRadius: 20,
    borderRadius: 22,
    borderColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
    padding: 15,
    justifyContent: 'flex-end',
    alignContent: 'space-around'


  },
  textContainer: {
    marginLeft: 18,
    height: 80,
    maxWidth: 280,
  },
  titleText: {
    marginHorizontal: 12,
    marginTop: 5,
    fontSize: 20,
    color: 'black',
    fontFamily: 'roboto',
    textAlign: 'right'
  },
  descriptionText: {
    marginVertical: 5,
    marginHorizontal: 12,
    color: Colors.fadedTextGrey
  },
  photoStyle: {
    flex: 1,
    borderRadius: 20,
  }
})
export default RenderGridItem