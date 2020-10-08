import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import GigItem from '../components/GigItem';

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
    <LinearGradient
      colors={[props.color, '#5851DB', 'transparent']}
      style={styles.linearGradient}
      start={{ x: 0.7, y: 0.4 }}
    >
      <FlatList
        data={props.gigData}
        keyExtractor={(item, index) => item.id}
        renderItem={renderItem}
      />
    </LinearGradient>
  )
}
const styles = StyleSheet.create({
  linearGradient: {
    width: '100%'
  }
})


export default GigListComponent;