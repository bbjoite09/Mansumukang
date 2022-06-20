import axios from 'axios';
import React, {useState} from 'react';
import {Linking, StyleSheet, Text, View} from 'react-native';
import {Config} from 'react-native-config';
import Slick from 'react-native-slick';

// Naver Developers에 등록한 애플리케이션 id, password 개발 환경 파일에서 가져오기
const CLIENT_ID = Config.CLIENT_ID;
const CLIENT_SECRET = Config.CLIENT_SECRET;

// News api 호출을 위한 request 데이터 정의
// url - json 값을 반환하도록 요청 url 정의
const url = 'https://openapi.naver.com/v1/search/news.json';

// headers 세팅
const headers = {
  'X-Naver-Client-Id': CLIENT_ID,
  'X-Naver-Client-Secret': CLIENT_SECRET,
};
// request parameter 정의, 검색 키워드 : 제로웨이스트, 5개 기사 크롤링, 검색시작 위치 1, 날짜 기준 정렬
const params = {query: '제로웨이스트', display: 5, start: 1, sort: 'date'};

// api로 부터 response를 받기 위한 axios 통신
// 위에서 정의한 url, headers, params 를 넣어 get방식의 통신을 진행한다.
const ecoNews = axios
  .get(url, {
    params: params,
    headers,
  })
  .then(res => {
    return res.data.items;
  })
  .catch(err => console.log(err));

// 화면 UI 그리기
const News = () => {
  // 받아온 news 를 저장할 변수 선언
  const [newsList, setNews] = useState(null);

  // promise 형태의 비동기 데이터를 처리해서 newsList에 저장
  ecoNews.then(res => {
    setNews(res);
  });

  // UI 를 리턴한다.
  return (
    // 뉴스 페이지 전체를 감싸는 Layout
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
      {/* newsList에 있는 데이터를 Slick-slider로 보여준다.
          뉴스의 배경색을 두가지 색깔을 번갈아가면서 띄운다.
          사용성을 고려하여, 넘김 버튼을 배치하였으며 직접 슬라이드로 넘기기도 가능하다.
          하단 페이지네이션은 가독성을 위하여 제거하였다.
      */}
      <Slick showsButtons={true} showsPagination={false}>
        {newsList ? (
          newsList.map((data, idx) => (
            <View
              style={idx % 2 == 1 ? slickStyles.slide1 : slickStyles.slide2}
              key={idx}>
              {/* 제목 및 본문에 특수문자와 html 요소를 제거해준다. */}
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
              {/* 뉴스 발행 날짜 중 불필요한 형식을 제거한다. */}
              <Text style={slickStyles.newsDate}>
                {data.pubDate.replace('+0900', '')}
              </Text>
            </View>
          ))
        ) : (
          // 통신에 실패했을 경우를 위한 대체 UI를 배치한다.
          <View style={[slickStyles.slide1, {alignItems: 'center'}]}>
            <Text style={slickStyles.newsLodingText}>뉴스 로딩 중...</Text>
          </View>
        )}
      </Slick>
    </View>
  );
};

// StyleSheet를 활용한 스타일 정의
// Layout 구조, 글꼴, 색, padding, margin 등을 사전에 지정한다.
const styles = StyleSheet.create({
  container: {
    marginTop: '10%',
    height: 300,
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
