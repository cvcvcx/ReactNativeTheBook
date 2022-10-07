import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import Profile from './Profile';

function App() {
  return (
    <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
      <Profile name="John Doe">
        <Text>Hello world</Text>
      </Profile>
    </SafeAreaView>
  );
}

export default App;
