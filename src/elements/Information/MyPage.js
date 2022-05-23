import React from 'react';
import {Text} from 'react-native';

const Mypage = () => {
  return (
    <>
      <Text
        style={{
          fontSize: 20,
          fontWeight: '600',
          alignSelf: 'flex-start',
          marginLeft: '5%',
          marginBottom: '5%',
        }}>
        🌱 나의 기록 확인하기
      </Text>
    </>
  );
};

export default Mypage;
