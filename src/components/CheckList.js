import React, {useState} from 'react';
import {StyleSheet, View, TextInput, Pressable, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const CheckList = () => {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [number3, setNumber3] = useState(0);
  const [number4, setNumber4] = useState(0);
  const [number5, setNumber5] = useState(0);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>5R Score Chart</Text>
      <View style={styles.bodyContainer}>
        <TextInput
          style={styles.textInput}
          onChangeText={text => {
            setNumber1(text);
          }}
          value={number1}
          placeholder="Refuse."
          keyboardType="numeric"
        />
        <TextInput
          style={styles.textInput}
          onChangeText={text => {
            setNumber2(text);
          }}
          value={number2}
          placeholder="Reduce."
          keyboardType="numeric"
        />
        <TextInput
          style={styles.textInput}
          onChangeText={text => {
            setNumber3(text);
          }}
          value={number3}
          placeholder="Reuse."
          keyboardType="numeric"
        />
        <TextInput
          style={styles.textInput}
          onChangeText={text => {
            setNumber4(text);
          }}
          value={number4}
          placeholder="Recycle."
          keyboardType="numeric"
        />
        <TextInput
          style={styles.textInput}
          onChangeText={text => {
            setNumber5(text);
          }}
          value={number5}
          placeholder="Rot."
          keyboardType="numeric"
        />
        <Pressable title="제출" onPress={() => {}} />
        <Text style={styles.showText}>
          {Math.ceil(
            ((2 / 36) * Number(number1) +
              (3 / 36) * Number(number2) +
              (2 / 36) * Number(number3) +
              (3 / 36) * Number(number4) +
              (2 / 36) * Number(number5)) *
              100,
          )}
          점
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFEAD0',
    paddingHorizontal: 30,
    flex: 1,
  },
  headerText: {
    paddingTop: 50,
    alignItems: 'center',
    fontSize: 30,
  },
  bodyContainer: {
    backgroundColor: '#FDF5DC',
    paddingHorizontal: 20,
    marginVertical: 30,
    flex: 1,
  },
  textInput: {
    marginTop: 20,
    marginBottom: 10,
    paddingHorizontal: 10,
    height: 40,
    borderRadius: 10,
    borderColor: 'gray',
    borderWidth: 1,
  },
  showText: {
    marginTop: 10,
    fontSize: 25,
  },
});

export default CheckList;
