import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  Dimensions,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import r5 from '../assets/activity/r5.png';
import mainLogo from '../assets/activity/logo.png';

// eslint-disable-next-line react/prop-types
const Activity = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={mainLogo}
        style={{
          resizeMode: 'contain',
          height: 160,
          width: '100%',
          marginBottom: '3%',
        }}
      />
      <Image
        style={{width: '90%', height: '50%', marginTop: '-5%'}}
        source={r5}
      />
      <View style={styles.footer}>
        <Pressable
          style={styles.roundButton}
          onPress={() => {
            console.log();
            // eslint-disable-next-line react/prop-types
            navigation.navigate('CheckList');
          }}>
          <Text style={styles.buttonText}>5R 점수 계산</Text>
        </Pressable>
        <Pressable
          style={styles.roundButton}
          onPress={() => {
            console.log('click');
            // eslint-disable-next-line react/prop-types
            navigation.navigate('R5Info');
          }}>
          <Text style={styles.buttonText}>5R 이란?</Text>
        </Pressable>
      </View>
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
    position: 'relative',
    marginTop: '-5%',
  },
  footer: {
    width: '100%',
    height: '20%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  roundButton: {
    width: '65%',
    height: '40%',
    backgroundColor: '#405C2F',
    borderRadius: 100,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '5%',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
  },
});

export default Activity;
