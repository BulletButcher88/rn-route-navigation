import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LinearGradientComponent from '../components/LinearGradientComponent'

const VenueMapScreen = props => {
  return (
    <LinearGradientComponent colors={props.colors} style={styles.linearGradientContainer}>
      <Text>MAP PLACE HERE</Text>
    </LinearGradientComponent>
  )
}

const styles = StyleSheet.create({
  linearGradientContainer: {
    flex: 1,
  }
})

export default VenueMapScreen