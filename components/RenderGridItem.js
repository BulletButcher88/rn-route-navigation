import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet, Image, Platform } from 'react-native'
import { TouchableNativeFeedback } from 'react-native-gesture-handler';
import LinearGradientComponent from '../components/LinearGradientComponent'
import Colors from '../constants/Colors'

const RenderGridItem = props => {
  let TouchableCmp = TouchableOpacity

  if (Platform.OS == 'android' && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback
  }

  const ContainerImage = (imageUri) => {
    return (
      imageUri ? <Image
        style={styles.photoStyle}
        source={{ uri: imageUri.image }}
      /> : null
    )
  }

  return (
    <View style={styles.girdItems}>
      <LinearGradientComponent colors={props.color} style={styles.touchableGrid}>
        <TouchableCmp
          style={{ flex: 1 }}
          onPress={props.onSelect}>
          <ContainerImage {...props} />
        </TouchableCmp >
      </LinearGradientComponent>
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
    width: 340,
    padding: 5,
    justifyContent: 'flex-end',
    alignContent: 'space-around'
  },
  touchableGrid: {
    flex: 1,
    width: 315,
    height: 200,
    borderRadius: 30,
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 5 },
    elevation: 4,
  },
  textContainer: {
    marginLeft: 5,
    height: 80,
    maxWidth: 280,
  },
  titleText: {
    marginTop: 5,
    fontSize: 20,
    color: 'black',
    fontFamily: 'roboto',
  },
  descriptionText: {
    marginVertical: 5,
    marginHorizontal: 5,
    color: Colors.offBlackText
  },
  photoStyle: {
    flex: 1,
    height: '100%',
    borderRadius: 30,
    margin: 10
  }
})
export default RenderGridItem