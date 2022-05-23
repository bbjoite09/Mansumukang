import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Slick from 'react-native-slick';
import {Config} from 'react-native-config';
import axios from 'axios';

const CLIENT_ID = Config.CLIENT_ID;
const CLIENT_SECRET = Config.CLIENT_SECRET;
const url = 'https://openapi.naver.com/v1/search/news.json';

const headers = {
  'X-Naver-Client-Id': CLIENT_ID,
  'X-Naver-Client-Secret': CLIENT_SECRET,
};

const ecoNews = axios
  .get(url, {
    params: {query: '제로웨이스트', display: 5, start: 1, sort: 'date'},
    headers,
  })
  .then(res => {
    return res.data;
  })
  .catch(err => console.log(err));

ecoNews.then(res => {
  console.log(res);
});

const News = () => {
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 20,
          fontWeight: '600',
          alignSelf: 'flex-start',
          marginLeft: '5%',
          marginBottom: '5%',
        }}>
        🌏 매일 녹색 소식
      </Text>
      <Slick showsButtons={true} showsPagination={false}>
        <View style={slickStyles.slide1}>
          <Text style={slickStyles.text}>Hello Slick</Text>
        </View>
        <View style={slickStyles.slide2}>
          <Text style={slickStyles.text}>Beautiful</Text>
        </View>
        <View style={slickStyles.slide3}>
          <Text style={slickStyles.text}>And simple</Text>
        </View>
      </Slick>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    height: '40%',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});

const slickStyles = StyleSheet.create({
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default News;
