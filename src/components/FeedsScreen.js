import React, {useState} from 'react';
import {StyleSheet, View, TextInput, Text} from 'react-native';
import FeedList from './FeedList';
import FloatingWriteButton from './FloatingWriteButton';
import {useLog} from '../contexts/LogContext';

function FeedsScreen() {
  const {logs} = useLog();

  console.log(logs);

  const [hidden, setHidden] = useState(false);

  const onScrolledToBottom = isBottom => {
    if (hidden !== isBottom) {
      setHidden(isBottom);
    }
  };

  return (
    <View style={styles.block}>
      <FeedList logs={logs} onScrolledToBottom={onScrolledToBottom} />
      <FloatingWriteButton hidden={hidden} />
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
  input: {
    padding: 16,
    backgroundColor: 'white',
  },
});

export default FeedsScreen;
