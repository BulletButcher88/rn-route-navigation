import React from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

import LinearGradientComponent from '../components/LinearGradientComponent'


const VenueMapScreen = props => {

  const DummyCoordinates = props => {
    return (
      <View>
        <Marker
          coordinate={{
            latitude: -37.768082,
            longitude: 144.962082,
          }}
          title="YOURS HERE"
          description="LOCATION"
        />
        <Marker
          coordinate={{
            latitude: -37.79833,
            longitude: 144.97711,
          }}
          title="THE OLD BAR"
          description="See who is playing"
        />
        <Marker
          coordinate={{
            latitude: -37.7994,
            longitude: 144.9872,
          }}
          title="TOTE HOTEL"
          description="See who is playing"
        />
      </View>
    )
  }

  return (
    <LinearGradientComponent colors={props.colors} style={styles.linearGradientContainer}>
      <MapView
        style={styles.mapContainerStyle}
        initialRegion={{
          latitude: -37.768082,
          longitude: 144.962082,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <DummyCoordinates />
      </MapView>
    </LinearGradientComponent>
  )
}

const styles = StyleSheet.create({
  linearGradientContainer: {
    flex: 1,
    padding: 10
  },
  mapContainerStyle: {
    flex: 1,
    borderRadius: 20,
  }
})

export default VenueMapScreen