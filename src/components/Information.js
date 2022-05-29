import React from 'react';
import {
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
  Platform,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import News from '../elements/Information/News';
import mainLogo from '../assets/information/logo.png';
import Mypage from '../elements/Information/MyPage';

const Information = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{marginTop: '-5%'}}>
        <Image
          source={mainLogo}
          // style={{resizeMode: 'cover', transform: [{scale: 0.67}]}}
          style={{
            resizeMode: 'contain',
            height: 160,
            width: '100%',
            marginBottom: '3%',
          }}
        />
        <Mypage />
        <News />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    width: Dimensions.get('screen').width,
    height: Platform.OS == 'ios' ? '105%' : '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 10,
  },
});

export default Information;
