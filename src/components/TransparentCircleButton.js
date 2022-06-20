import React from 'react';
import {Platform, Pressable, StyleSheet, View, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

function TransparentCircleButton({name, color, hasMarginRight, onPress}) {
  return (
    <View
      style={[styles.iconButtonWrapper, hasMarginRight && styles.rightMargin]}>
      <Pressable
        onPress={onPress}
        android_ripple={{color: '#ededed'}}
        style={({pressed}) => [
          styles.iconButton,
          Platform.OS === 'ios' &&
            pressed && {
              backgroundColor: '#efefef',
            },
        ]}>
        <Image
          source={require('../assets/shared/cal.png')}
          style={{width: 30, height: 30}}
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  iconButtonWrapper: {
    width: 32,
    height: 32,
    borderRadius: 16,
    overflow: 'hidden',
  },
  iconButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 32,
    height: 32,
    borderRadius: 16,
  },
  rightMargin: {
    marginRight: 8,
  },
});

export default TransparentCircleButton;
