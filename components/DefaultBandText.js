import React from 'react';
import { Text, StyleSheet } from 'react-native';

const DefaultBandText = props => {
  return <Text style={{ ...styles.artistNameText, ...props.style }}>{props.children}</Text>
}

const styles = StyleSheet.create({
  artistNameText: {
    flex: 1,
    marginHorizontal: 2,
    fontSize: 15,
    padding: 2,
    color: 'white',
    fontFamily: 'roboto-bold',
  }
})

export default DefaultBandText;