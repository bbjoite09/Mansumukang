import React, {useState} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {Rating} from 'react-native-ratings';
import {SafeAreaView} from 'react-native-safe-area-context';

const CheckList = () => {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [number3, setNumber3] = useState(0);
  const [number4, setNumber4] = useState(0);
  const [number5, setNumber5] = useState(0);

  return (
    <SafeAreaView style={styles.container}>
      <Image source={require('../../assets/activity/countTitle.png')} />
      <View style={styles.bodyContainer}>
        <View style={styles.rowContainer}>
          <Text style={styles.ratingLabel}>Refuse</Text>
          <Rating
            type="custom"
            // eslint-disable-next-line no-undef
            ratingImage={require('../../assets/activity/leaf.png')}
            ratingColor="#77B255"
            ratingBackgroundColor="#c8c7c8"
            ratingCount={5}
            imageSize={40}
            startingValue={0}
            onFinishRating={rating => {
              setNumber1(rating);
            }}
            style={{paddingVertical: 10}}
          />
        </View>
        <View style={styles.rowContainer}>
          <Text style={styles.ratingLabel}>Reduce</Text>
          <Rating
            type="custom"
            // eslint-disable-next-line no-undef
            ratingImage={require('../../assets/activity/leaf.png')}
            ratingColor="#77B255"
            ratingBackgroundColor="#c8c7c8"
            ratingCount={5}
            startingValue={0}
            imageSize={40}
            onFinishRating={rating => {
              setNumber2(rating);
            }}
            style={{paddingVertical: 10}}
          />
        </View>
        <View style={styles.rowContainer}>
          <Text style={styles.ratingLabel}>Reuse</Text>
          <Rating
            type="custom"
            // eslint-disable-next-line no-undef
            ratingImage={require('../../assets/activity/leaf.png')}
            ratingColor="#77B255"
            ratingBackgroundColor="#c8c7c8"
            ratingCount={5}
            imageSize={40}
            startingValue={0}
            onFinishRating={rating => {
              setNumber3(rating);
            }}
            style={{paddingVertical: 10}}
          />
        </View>
        <View style={styles.rowContainer}>
          <Text style={styles.ratingLabel}>Recycle</Text>
          <Rating
            type="custom"
            // eslint-disable-next-line no-undef
            ratingImage={require('../../assets/activity/leaf.png')}
            ratingColor="#77B255"
            ratingBackgroundColor="#c8c7c8"
            ratingCount={5}
            startingValue={0}
            onFinishRating={rating => {
              setNumber4(rating);
            }}
            style={{paddingVertical: 10}}
          />
        </View>
        <View style={styles.rowContainer}>
          <Text style={styles.ratingLabel}>Rot</Text>
          <Rating
            type="custom"
            // eslint-disable-next-line no-undef
            ratingImage={require('../../assets/activity/leaf.png')}
            ratingColor="#77B255"
            ratingBackgroundColor="#c8c7c8"
            ratingCount={5}
            startingValue={0}
            imageSize={40}
            onFinishRating={rating => {
              setNumber5(rating);
            }}
            style={{paddingVertical: 10}}
          />
        </View>
      </View>
      <View
        style={[
          styles.bodyContainer,
          {
            height: '9%',
            marginTop: -5,
            backgroundColor: '#FFE090',
          },
        ]}>
        <Text style={[styles.showText, {color: 'black', marginTop: -1}]}>
          🔎 총 합 :{' '}
          {Math.ceil(
            ((2 / 36) * Number(number1) +
              (3 / 36) * Number(number2) +
              (2 / 36) * Number(number3) +
              (3 / 36) * Number(number4) +
              (2 / 36) * Number(number5)) *
              100,
          )}
          점 입니다.
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#728F60',
    paddingHorizontal: 30,
    flex: 1,
  },
  rowContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  ratingLabel: {
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'left',
    width: 80,
  },
  headerText: {
    alignItems: 'center',
    fontSize: 30,
    color: 'white',
    fontWeight: '600',
  },
  bodyContainer: {
    marginTop: 30,
    backgroundColor: '#FDF5DC',
    paddingHorizontal: 20,
    marginVertical: 20,
    height: '60%',
    display: 'flex',
    justifyContent: 'center',
    borderRadius: 10,
  },
  textInput: {
    marginTop: 15,
    marginBottom: 15,
    paddingHorizontal: 15,
    height: 40,
    borderRadius: 10,
    borderColor: 'gray',
    borderWidth: 1,
  },
  showText: {
    marginTop: 10,
    fontSize: 18,
    color: 'white',
    fontWeight: '600',
  },
});

export default CheckList;
