import React from 'react';
import { useSelector } from 'react-redux';
import GigListComponent from '../components/GigListComponent';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import CustomButton from '../components/CustomButton';

const FavoriteScreen = props => {
  const filteredSearch = useSelector(state => state.gigs.favoriteGigs)

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


export default FavoriteScreen