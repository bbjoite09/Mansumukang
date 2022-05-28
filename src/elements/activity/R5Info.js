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
            <Text style={{fontSize: 17}}>거절하기</Text>
            <Text style={{fontSize: 15}}>
              사용하지 않거나 필요없는 제품들은 거절하기
            </Text>
          </View>
          <Text style={styles.headerText}>2. Reduce</Text>
          <View style={styles.bodyContainer}>
            <Text style={{fontSize: 17}}>줄이기</Text>
            <Text style={{fontSize: 15}}>
              거절하기 힘든 것들은 사용량을 줄이기
            </Text>
          </View>
          <Text style={styles.headerText}>3. Reuse</Text>
          <View style={styles.bodyContainer}>
            <Text style={{fontSize: 17}}>재생하기</Text>
            <Text style={{fontSize: 15}}>
              수리하거나 중고품을 구입해 재사용하기
            </Text>
          </View>
          <Text style={styles.headerText}>4. Recycle</Text>
          <View style={styles.bodyContainer}>
            <Text style={{fontSize: 17}}>재활용하기</Text>
            <Text style={{fontSize: 15}}>새로운 용도로 물품 재활용하기</Text>
          </View>
          <Text style={styles.headerText}>5. Rot</Text>
          <View style={styles.bodyContainer}>
            <Text style={{fontSize: 17}}>썩히기</Text>
            <Text style={{fontSize: 15}}>생분해되는 상품 이용하기</Text>
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
    height: 200,
    borderRadius: 10,
  },
});

export default R5Info;
