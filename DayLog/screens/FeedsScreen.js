import React, {useContext} from 'react';
import {StyleSheet, View, TextInput} from 'react-native';
import FeedList from '../components/FeedList';
import LogContext from '../contexts/LogContext';
import FloatingWriteButton from '../components/FloatingWriteButton';
function FeedsScreen() {
  const {logs} = useContext(LogContext);
  return (
    <View style={styles.block}>
      <FeedList logs={logs} />
      <FloatingWriteButton />
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
});
export default FeedsScreen;
