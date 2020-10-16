import React from 'react';
import { StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


const LinearGradientComponent = props => {
  return (
    <LinearGradient
      colors={[props.colors ? props.colors : '#fa7a7a', '#5851DB', 'transparent']}
      style={{ ...props.style, ...styles.linearGradient }}
      start={{ x: 0.7, y: 0.4 }}
    >
      { props.children}
    </LinearGradient >
  )
}

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1
  }
})

export default LinearGradientComponent