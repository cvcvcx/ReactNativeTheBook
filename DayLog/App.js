import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootStack from './screens/RootStack';
import {LogContextProvider} from './contexts/LogContext';
import {Platform, StatusBar} from 'react-native';
import {SearchContextProvider} from './contexts/SearchContext';
function App() {
  if (Platform.OS === 'ios') {
    StatusBar.setBarStyle('dark-content', true);
  }
  return (
    <NavigationContainer>
      <SearchContextProvider>
        <LogContextProvider>
          <RootStack />
        </LogContextProvider>
      </SearchContextProvider>
    </NavigationContainer>
  );
}

export default App;
