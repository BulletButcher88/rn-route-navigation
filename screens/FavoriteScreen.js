import React from 'react';
import { StyleSheet } from 'react-native';
import { GIGS } from '../data/dummyData';
import GigListComponent from '../components/GigListComponent';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import CustomButton from '../components/CustomButton';

const FavoriteScreen = props => {
  const dummyData = GIGS.filter(gig => gig.id == '01' || gig.id == '02')
  return (
    <GigListComponent gigData={dummyData} {...props} />
  )
}

FavoriteScreen.navigationOptions = (navData) => {
  return {
    headerTitle: 'Gigs For You',
    headerLeft: () => {
      return (<HeaderButtons HeaderButtonComponent={CustomButton}>
        <Item title='Menu' iconName='ios-menu' onPress={() => {
          navData.navigation.toggleDrawer()
        }} />
      </HeaderButtons>)
    }
  }
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default FavoriteScreen