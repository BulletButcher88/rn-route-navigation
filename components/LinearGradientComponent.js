import React from 'react';
import { StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


const LinearGradientComponent = props => {
  return (
    <LinearGradient
      colors={[props.colors, '#5851DB', 'transparent']}
      style={styles.linearGradient}
      start={{ x: 0.7, y: 0.4 }}
    >
      {props.children}
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  linearGradient: {
    width: '100%'
  }
})

export default LinearGradientComponent