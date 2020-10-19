import React from 'react';
import { StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Colors from '../constants/Colors'


const LinearGradientComponent = props => {
  return (
    <LinearGradient
      colors={[props.colors ? props.colors : Colors.accentColor, Colors.neonPurple, 'transparent']}
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