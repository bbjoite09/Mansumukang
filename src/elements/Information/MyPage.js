import React from 'react';
import {Text, Dimensions} from 'react-native';
import {LineChart} from 'react-native-chart-kit';

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
      <LineChart
        data={{
          labels: ['05/16', '05/17', '05/18', '05/19', '05/20', '05/21'],
          datasets: [
            {
              data: [80, 89, 90, 98, 100, 92],
            },
          ],
        }}
        width={Dimensions.get('window').width} // from react-native
        height={250}
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          backgroundColor: '#8F6D82',
          backgroundGradientFrom: '#8F6D82',
          backgroundGradientTo: '#8F6D82',
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: '6',
            strokeWidth: '2',
            stroke: 'white',
          },
        }}
        bezier
        style={{
          paddingTop: 30,
        }}
      />
    </>
  );
};

export default Mypage;