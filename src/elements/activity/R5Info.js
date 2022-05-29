/* eslint-disable no-undef */
import React from 'react';
import {StyleSheet, ScrollView, Text, View, Image} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const R5Info = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} style={{flex: 1}}>
        <Image
          source={require('../../assets/activity/countTitle.png')}
          style={{marginTop: '10%'}}
        />
        <View style={{marginTop: '5%'}}>
          <Text style={styles.headerText}>1. Refuse</Text>
          <View style={styles.bodyContainer}>
            <Text style={styles.bodyTop}>
              Say no to things you do not need, such as disposable cups and
              plastic straws.
            </Text>
            <Image
              style={{width: '90%', height: '75%'}}
              source={require('../../assets/activity/Refuse.png')}
            />
          </View>
          <Text style={styles.headerText}>2. Reduce</Text>
          <View style={styles.bodyContainer}>
            <Text style={styles.bodyTop}>
              Purchasing only the essentials and buying products with little
              packaging.
            </Text>
            <Image
              style={{width: '90%', height: '75%'}}
              source={require('../../assets/activity/Reduce.png')}
            />
          </View>
          <Text style={styles.headerText}>3. Reuse</Text>
          <View style={styles.bodyContainer}>
            <Text style={styles.bodyTop}>
              Reusing something that can be reused.
            </Text>
            <Image
              style={{width: '90%', height: '75%'}}
              source={require('../../assets/activity/Reuse.png')}
            />
          </View>
          <Text style={styles.headerText}>4. Recycle</Text>
          <View style={styles.bodyContainer}>
            <Text style={styles.bodyTop}>
              Recycle products that can be recycled.
            </Text>
            <Image
              style={{width: '90%', height: '75%'}}
              source={require('../../assets/activity/Recycle.png')}
            />
          </View>
          <Text style={styles.headerText}>5. Rot</Text>
          <View style={styles.bodyContainer}>
            <Text style={styles.bodyTop}>
              In the case of food that cannot be recycled, collect only food and
              rot to make feed.
            </Text>
            <Image
              style={{height: '65%', resizeMode: 'contain'}}
              source={require('../../assets/activity/Rot.png')}
            />
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
    fontSize: 30,
    color: 'white',
    fontWeight: '600',
  },
  bodyContainer: {
    marginTop: 30,
    backgroundColor: '#FDF5DC',
    paddingHorizontal: 20,
    marginVertical: 20,
    height: 220,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  bodyTop: {
    fontSize: 15,
  },
});

export default R5Info;
