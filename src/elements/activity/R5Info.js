import React from 'react';
import {StyleSheet, ScrollView, Text, View, Image} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const R5Info = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={require('../../assets/activity/countTitle.png')} />
      <ScrollView showsVerticalScrollIndicator={false} style={{flex: 1}}>
        <View style={{marginTop: '5%'}}>
          <Text style={styles.headerText}>1. Refuse</Text>
          <View style={styles.bodyContainer}>
            <Text style={styles.bodyTop}>Refuse</Text>
            <Text style={styles.bodyTop}>Refuse</Text>
          </View>
          <Text style={styles.headerText}>2. Reduce</Text>
          <View style={styles.bodyContainer}>
            <Text style={styles.bodyTop}>Reduce</Text>
            <Text style={styles.bodyTop}>Reduce</Text>
          </View>
          <Text style={styles.headerText}>3. Reuse</Text>
          <View style={styles.bodyContainer}>
            <Text style={styles.bodyTop}>Reuse</Text>
            <Text style={styles.bodyTop}>Reuse</Text>
          </View>
          <Text style={styles.headerText}>4. Recycle</Text>
          <View style={styles.bodyContainer}>
            <Text style={styles.bodyTop}>Recycle</Text>
            <Text style={styles.bodyTop}>Recycle</Text>
          </View>
          <Text style={styles.headerText}>5. Rot</Text>
          <View style={styles.bodyContainer}>
            <Text style={styles.bodyTop}>Rot</Text>
            <Text style={styles.bodyTop}>Rot</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#728F60',
    paddingHorizontal: 30,
    height: 100,
    flex: 1,
  },
  headerText: {
    fontFamily: 'Pacifico-Regular',
    fontSize: 30,
    color: 'white',
    fontWeight: '600',
  },
  bodyContainer: {
    marginTop: 30,
    backgroundColor: '#FDF5DC',
    paddingHorizontal: 20,
    marginVertical: 20,
    height: 200,
    borderRadius: 10,
  },
  bodyTop: {
    fontFamily: 'DancingScript-Bold',
    fontSize: 15,
  },
});

export default R5Info;
