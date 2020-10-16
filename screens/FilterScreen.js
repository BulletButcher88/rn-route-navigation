import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { useDispatch } from 'react-redux'
import { setFilters } from '../store/actions/gigs'

import CustomButton from '../components/CustomButton';
import Colors from '../constants/Colors'

const FilterScreen = props => {
  const { navigation } = props;

  const [isLocal, setIsLocal] = useState(false)
  const [isAllAges, setIsAllAges] = useState(false)
  const [isFree, setIsFree] = useState(false)
  const [justFestivals, setJustFestivals] = useState(false)

  const dispatch = useDispatch()

  const saveFilters = useCallback(() => {
    const applyFilters = {
      isLocal: isLocal,
      isAllAges: isAllAges,
      isFree: isFree,
      isFestival: justFestivals
    }
    dispatch(setFilters(applyFilters))
  }, [isLocal, isAllAges, isFree, justFestivals, dispatch])

  useEffect(() => {
    navigation.setParams({
      save: saveFilters
    })
  }, [saveFilters])

  return (
    <View style={styles.screen}>
      <Text style={{ fontSize: 22, margin: 10 }}>Refine your search</Text>
      <View style={styles.filterSwitchContainer}>
        <Text style={styles.filterText}>
          Local area (8km radius)
        </Text>
        <Switch
          trackColor={{ true: Colors.lightRed }}
          value={isLocal}
          onValueChange={newValue => setIsLocal(newValue)} />
      </View>
      <View style={styles.filterSwitchContainer}>
        <Text style={styles.filterText}>
          All ages
        </Text>
        <Switch
          trackColor={{ true: Colors.lightRed }}
          value={isAllAges}
          onValueChange={newValue => setIsAllAges(newValue)}
        />
      </View>
      <View style={styles.filterSwitchContainer}>
        <Text style={styles.filterText}>
          Free entry
          </Text>
        <Switch
          trackColor={{ true: Colors.lightRed }}
          value={isFree}
          onValueChange={newValue => setIsFree(newValue)}
        />
      </View>
      <View style={styles.filterSwitchContainer}>
        <Text style={styles.filterText}>
          Only festivals
          </Text>
        <Switch
          trackColor={{ true: Colors.lightRed }}
          value={justFestivals}
          onValueChange={newValue => setJustFestivals(newValue)}
        />
      </View>
    </View>
  )
}

FilterScreen.navigationOptions = (navData) => {
  return {
    headerTitle: 'Filter',
    headerLeft: () => {
      return (
        <HeaderButtons HeaderButtonComponent={CustomButton}>
          <Item title='Menu' iconName='ios-menu' onPress={() => {
            navData.navigation.toggleDrawer()
          }} />
        </HeaderButtons>)
    },
    headerRight: () => {
      return (
        <HeaderButtons HeaderButtonComponent={CustomButton}>
          <Item title='Save' onPress={navData.navigation.getParam('save')} />
        </HeaderButtons>
      )
    }
  }
};

const styles = StyleSheet.create({
  filterSwitchContainer: {
    width: '80%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10
  },
  filterText: {
    fontSize: 18
  },
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default FilterScreen