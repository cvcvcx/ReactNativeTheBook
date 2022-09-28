import React from 'react';
import {View, Text, Button} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
function HeaderlessScreen({navigation}) {
  return (
    <SafeAreaView>
      <Text>Header가 없네?</Text>
      <Button onPress={() => navigation.pop()} title="뒤로가기" />
    </SafeAreaView>
  );
}

export default HeaderlessScreen;
