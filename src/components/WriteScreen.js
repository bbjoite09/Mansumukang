import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation, useRoute} from '@react-navigation/native';
import {StyleSheet, KeyboardAvoidingView, Platform, Alert} from 'react-native';

import {useLog} from '../contexts/LogContext';
import WriteHeader from '../components/WriteHeader';
import WriteEditor from '../components/WriteEditor';

function WriteScreen() {
  const {params} = useRoute();

  const log = params?.log;

  console.log(log);

  const [title, setTitle] = useState(log?.title ?? '');
  const [body, setBody] = useState(log?.body ?? '');
  const {onCreate, onModify, onRemove} = useLog();
  const [date, setDate] = useState(log ? new Date(log.date) : new Date());

  const navigation = useNavigation();

  const onSave = () => {
    if (log) {
      onModify({
        id: log.id,
        date: date.toISOString(),
        title,
        body,
      });
    } else {
      onCreate({title, body, date: date.toISOString()});
    }
    navigation.pop();
  };

  const onAskRemove = () => {
    if (!log?.id) {
      return;
    }

    Alert.alert(
      '삭제',
      '정말로 삭제하시겠어요?',
      [
        {text: '취소', style: 'cancel'},
        {
          text: '삭제',
          style: 'destructive',
          onPress: () => {
            onRemove(log?.id);
            navigation.pop();
          },
        },
      ],
      {cancelable: true},
    );
  };

  return (
    <SafeAreaView style={styles.block}>
      <KeyboardAvoidingView
        style={styles.avoidingView}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <WriteHeader
          onSave={onSave}
          onAskRemove={onAskRemove}
          isEditing={!!log}
          date={date}
          onChangeDate={setDate}
        />
        <WriteEditor
          title={title}
          body={body}
          onChangeTitle={setTitle}
          onChangeBody={setBody}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    backgroundColor: 'white',
  },
  avoidingView: {
    flex: 1,
  },
});
export default WriteScreen;
