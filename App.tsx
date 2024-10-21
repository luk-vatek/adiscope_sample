/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native';

import {
  initialize4Adiscope,
  setUserId4Adiscope,
} from '@adiscope.ad/adiscope-react-native';
import {NavigationContainer} from '@react-navigation/native';
import Routes from './src/navigator';

function App(): React.JSX.Element {
  const initializeAdiscope = async () => {
    await setUserId4Adiscope('');
    const response = await initialize4Adiscope();
    console.log('check---->', response);
    return response;
  };
  useEffect(() => {
    initializeAdiscope();
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default App;
