import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

function AddMedia() {
  return (
    <View style={styles.container}>
      <Text>AddMedia</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default AddMedia;
