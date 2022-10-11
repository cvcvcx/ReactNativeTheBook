import {View, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import FeedScreen from './FeedScreen';
import ProfileScreen from './ProfileScreen';
import PostScreen from './PostScreen';
import {LikeContextProvider} from '../contexts/LikeContext';
const Stack = createNativeStackNavigator();

function HomeStack() {
  return (
    <LikeContextProvider>
      <Stack.Navigator>
        <Stack.Screen name="Feed" component={FeedScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen
          name="Post"
          component={PostScreen}
          options={{title: '게시물'}}
        />
      </Stack.Navigator>
    </LikeContextProvider>
  );
}

export default HomeStack;
