/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 *
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Greeting from './components/Greeting';
import Box from './components/Box';
const App = () => {
  const name = 'JSX';

  return (
    <SafeAreaView>
      <Greeting name={name} />
      <Box />
    </SafeAreaView>
  );
};
export default App;
