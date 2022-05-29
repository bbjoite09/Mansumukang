import axios from 'axios';
import React, {useState} from 'react';
import {Linking, StyleSheet, Text, View} from 'react-native';
import {Config} from 'react-native-config';
import Slick from 'react-native-slick';

const CLIENT_ID = Config.CLIENT_ID;
const CLIENT_SECRET = Config.CLIENT_SECRET;
const url = 'https://openapi.naver.com/v1/search/news.json';

const headers = {
  'X-Naver-Client-Id': CLIENT_ID,
  'X-Naver-Client-Secret': CLIENT_SECRET,
};

const ecoNews = axios
  .get(url, {
    params: {query: '제로웨이스트', display: 6, start: 1, sort: 'date'},
    headers,
  })
  .then(res => {
    return res.data.items;
  })
  .catch(err => console.log(err));

const News = () => {
  const [newsList, setNews] = useState(null);

  ecoNews.then(res => {
    setNews(res);
  });

  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 20,
          fontWeight: '600',
          alignSelf: 'flex-start',
          marginLeft: '5%',
          marginBottom: '5%',
          color: 'black',
        }}>
        🌏 매일 녹색 소식
      </Text>
      <Slick showsButtons={true} showsPagination={false}>
        {newsList ? (
          newsList.map((data, idx) => (
            <View
              style={idx % 2 == 1 ? slickStyles.slide1 : slickStyles.slide2}
              key={idx}>
              <Text
                style={slickStyles.newsTitle}
                onPress={() => {
                  Linking.openURL(data.link);
                }}>
                {data.title
                  .replace(/<[^>]*>?/gm, '')
                  .replace(/&quot;|&amp;/g, '')}
              </Text>
              <Text style={slickStyles.newsText}>
                {data.description
                  .replace(/<[^>]*>?/gm, '')
                  .replace(/&quot;/g, '')}
              </Text>
              <Text style={slickStyles.newsDate}>
                {data.pubDate.replace('+0900', '')}
              </Text>
            </View>
          ))
        ) : (
          <View style={[slickStyles.slide1, {alignItems: 'center'}]}>
            <Text style={slickStyles.newsLodingText}>뉴스 로딩 중...</Text>
          </View>
        )}
      </Slick>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: '10%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});

const slickStyles = StyleSheet.create({
  slide1: {
    flex: 1,
    padding: '10%',
    justifyContent: 'center',
    backgroundColor: '#A98D8D',
  },
  slide2: {
    flex: 1,
    padding: '10%',
    justifyContent: 'center',
    backgroundColor: '#92BBC0',
  },
  newsTitle: {
    color: '#fff',
    fontSize: 21,
    fontWeight: 'bold',
  },
  newsDate: {
    marginTop: '3%',
    color: '#fff',
    fontSize: 13,
    alignSelf: 'flex-end',
  },
  newsText: {
    marginTop: '5%',
    color: '#fff',
    fontSize: 15,
  },
  newsLodingText: {color: '#fff', fontSize: 21, fontWeight: 'bold'},
});

export default News;
