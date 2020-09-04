import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font'
import { AppLoading } from 'expo'

import Navigation from './src/navigation';

const App: React.FC = () => {
  const [ fontLoaded ] = useFonts({
    'Ubuntu': require('./assets/fonts/Ubuntu-Light.ttf'),
    'IndieFlower': require('./assets/fonts/IndieFlower.ttf')
  })

  if( !fontLoaded ) {
    return <AppLoading />
  }

  return (
    <>
      <Navigation />
      <StatusBar style='auto' />
    </>
  );
}

export default App
