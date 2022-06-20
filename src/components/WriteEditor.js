import React, {RefObject, useRef} from 'react';
import {View, StyleSheet, TextInput} from 'react-native';

function WriteEditor({title, body, onChangeTitle, onChangeBody}) {
  const bodyRef = useRef(null);

  return (
    <View style={styles.block}>
      <TextInput
        placeholder="제목을 입력하세요"
        onChangeText={onChangeTitle}
        value={title}
        returnKeyType="next"
        style={styles.titleInput}
        onSubmitEditing={() => {
          bodyRef.current?.focus();
        }}
      />
      <TextInput
        placeholder="오늘 실천한 제로 웨이스트 활동을 기록해주세요."
        style={styles.bodyInput}
        multiline
        onChangeText={onChangeBody}
        value={body}
        textAlignVertical="top"
        ref={bodyRef}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    padding: 16,
  },
  titleInput: {
    paddingVertical: 0,
    fontSize: 18,
    marginBottom: 16,
    color: '#263238',
    fontWeight: 'bold',
  },
  bodyInput: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 0,
    color: '#263238',
  },
});

export default WriteEditor;
