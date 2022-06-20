import React from 'react';
import {
  Image,
  Pressable,
  StyleSheet,
  TextInput,
  useWindowDimensions,
  View,
} from 'react-native';
import {useSearch} from '../contexts/SearchContext';

function SearchHeader() {
  const {width} = useWindowDimensions();
  const {keyword, onChangeText} = useSearch();

  return (
    <View style={[styles.block, {width: width - 32}]}>
      <TextInput
        placeholder="검색어를 입력하세요"
        value={keyword}
        onChangeText={onChangeText}
        autoFocus
        style={styles.input}
      />
      <Pressable
        style={({pressed}) => [styles.button, pressed && {opacity: 0.5}]}
        onPress={() => onChangeText('')}>
        <Image
          source={require('../assets/shared/search_no.png')}
          style={{width: 30, height: 30}}
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    color: 'black',
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
  },
  button: {
    marginLeft: 8,
  },
});

export default SearchHeader;
