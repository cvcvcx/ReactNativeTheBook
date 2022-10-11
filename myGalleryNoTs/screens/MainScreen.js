import {View, Text, Button} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

export function HomeScreen({navigation}) {
  return (
    <View>
      <Text>Home</Text>
      <Button title="Search 열기" onPress={() => navigation.push('Search')} />
    </View>
  );
}

export function SearchScreen() {
  return (
    <View>
      <Text>Search</Text>
    </View>
  );
}

function MainScreen() {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
    </Tab.Navigator>
  );
}

export default MainScreen;
