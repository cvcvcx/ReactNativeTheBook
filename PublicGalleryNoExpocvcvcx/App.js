import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootStack from './screens/RootStack';
import {UserContextProvider} from './contexts/UserContext';
import {LikeContextProvider} from './contexts/LikeContext';
/**
 *  aasdfasdfasdfsa
 *
 */

function App() {
  return (
    <UserContextProvider>
      <LikeContextProvider>
        <NavigationContainer>
          <RootStack />
        </NavigationContainer>
      </LikeContextProvider>
    </UserContextProvider>
  );
}

export default App;
