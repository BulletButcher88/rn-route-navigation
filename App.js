import React, { useState } from 'react';
import * as Font from 'expo-font'
import { AppLoading } from 'expo'
import { enableScreens } from 'react-native-screens'
import MealsNavigator from './navigation/MealsNavigation';

enableScreens()

const fetchFonts = () => {
  return (
    Font.loadAsync({
      'open-san': require('./assets/font/OpenSans-Bold.ttf'),
      'open-san-bold': require('./assets/font/OpenSans-Regular.ttf'),
      'ambit': require('./assets/font/Ambit-Regular.ttf'),
      'ambit-bold': require('./assets/font/Ambit-Bold.ttf')
    }))
}

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false)

  if (!fontLoaded) {
    //remember to return from here and fetchFont() * previous issue
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => { setFontLoaded(true) }} />
    )
  }

  return (
    <MealsNavigator />
  );
}


