import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import GigListComponent from '../components/GigListComponent';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import CustomButton from '../components/CustomButton';

const FavoriteScreen = props => {
  const filteredSearch = useSelector(state => state.gigs.favoriteGigs);

  if (!filteredSearch || filteredSearch.length === 0) {
    return <View style={styles.textContainer}><Text style={styles.defaultText}>No Favorites Selected</Text></View>
  }

  return (
    <GigListComponent gigData={filteredSearch} {...props} />
  )
}

FavoriteScreen.navigationOptions = (navData) => {
  return {
    headerTitle: 'Gigs For You',
    headerLeft: () => {
      return (
        <HeaderButtons HeaderButtonComponent={CustomButton}>
          <Item title='Menu' iconName='ios-settings' onPress={() => {
            navData.navigation.toggleDrawer()
          }} />
        </HeaderButtons>)
    }
  }
};

const styles = StyleSheet.create({
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  defaultText: {
    fontSize: 20
  }
})

export default FavoriteScreen