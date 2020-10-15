import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import LinearGradientComponent from '../components/LinearGradientComponent';
import GigItem from '../components/GigItem'

const GigListComponent = props => {
  const favoriteGig = useSelector(state => state.gigs.favoriteGigs);
  const renderItem = (itemData) => {
    const isFavorite = favoriteGig.some(gig => gig.id === itemData.item.id);
    return (
      <View style={styles.pageContainer}>
        <GigItem {...itemData}
          onSelectGig={() => {
            props.navigation.navigate({
              routeName: 'GigDetails',
              params: {
                gigId: itemData.item.id,
                selectedGigTitle: itemData.item.title,
                isFav: isFavorite,
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