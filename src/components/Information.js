import React from 'react';
import {StyleSheet, Image, Dimensions} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import News from '../elements/Information/News';
import mainLogo from '../assets/information/logo.png';
import Mypage from '../elements/Information/MyPage';

const Information = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={mainLogo}
        // style={{resizeMode: 'cover', transform: [{scale: 0.67}]}}
        style={{
          width: '100%',
          resizeMode: 'contain',
          alignItems: 'flex-start',
          marginTop: '-10%',
        }}
      />
      <Mypage />
      <News />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    width: Dimensions.get('window').width,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 10,
  },
});

export default Information;
