import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import CustomButton from '../components/CustomButton';

const FilterScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>FilterScreen</Text>
    </View>
  )
}

FilterScreen.navigationOptions = (navData) => {
  return {
    headerTitle: 'YIDAKI',
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

export default FilterScreen