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

const Activity = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={mainLogo}
        style={{
          width: '100%',
          resizeMode: 'contain',
          alignItems: 'flex-start',
          marginTop: '-10%',
        }}
      />
      <Image style={{width: '90%', height: '50%'}} source={r5} />
      <View style={styles.footer}>
        <Pressable
          style={styles.roundButton}
          onPress={() => {
            console.log();
            navigation.navigate('ActivityDetail');
          }}>
          <Text style={styles.buttonText}>5R Check List</Text>
        </Pressable>
        <Pressable
          style={styles.roundButton}
          onPress={() => {
            console.log('click');
          }}>
          <Text style={styles.buttonText}>5R Information</Text>
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
  },
  footer: {
    width: '100%',
    height: '20%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: '10%',
  },
  roundButton: {
    width: '45%',
    height: '40%',
    backgroundColor: '#405C2F',
    borderRadius: 100,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 17,
    fontWeight: '600',
    color: 'white',
  },
});

export default Activity;
