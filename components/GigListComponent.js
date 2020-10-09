import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import LinearGradientComponent from '../components/LinearGradientComponent';
import GigItem from '../components/GigItem'

const GigListComponent = props => {
  const renderItem = (itemData) => {
    return (
      <View style={styles.pageContainer}>
        <GigItem {...itemData}
          onSelectGig={() => {
            props.navigation.navigate({
              routeName: 'GigDetails',
              params: {
                gigId: itemData.item.id
              }
            });
          }} />
      </View>
    )
  }

  return (
    <LinearGradientComponent
      colors={props.colors}
    >
      <FlatList
        data={props.gigData}
        keyExtractor={(item, index) => item.id}
        renderItem={renderItem}
      />
    </LinearGradientComponent>
  )
}
const styles = StyleSheet.create({
  linearGradient: {
    width: '100%'
  }
})


export default GigListComponent;