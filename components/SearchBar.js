import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

const SearchBar = props => {
  const [textValue, setTextValue] = useState('')
  const [searching, setSearching] = useState(false);
  const PlaceholderInputText = props => {

    return (!props.searching ?
      (
        <>
          <Icon name="search" style={styles.icon} />
          <Text style={styles.placeholderText}>
            {"    "}What are we doing ?
        </Text>
        </>
      ) :
      null)

  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.inputStyle}
        onFocus={() => { setSearching(true) }}
        onBlur={() => { setSearching(false) }}
        onChangeText={(value) => {
          setTextValue(value)
          setSearching(value == '' ? false : true)
        }}>
        <PlaceholderInputText searching={searching} />
      </TextInput>
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    width: "100%",
    alignItems: 'center',
  },
  inputStyle: {
    flex: 1,
    height: 48,
    marginTop: 20,
    width: '80%',
    fontSize: 18,
    borderColor: '#bdbdbd',
    borderWidth: 1,
    borderRadius: 30,
    textAlign: 'center',
    backgroundColor: '#f6f6f6',
    fontFamily: 'roboto-bold',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.11,
    shadowRadius: 6.32,
    elevation: 13,
  },
  icon: {
    color: 'red',
    fontSize: 20,
    position: 'absolute',
    right: 0,
  },
  placeholderText: {
  }
})

export default SearchBar