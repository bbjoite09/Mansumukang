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
          color: 'black',
        }}>
        🌱 나의 기록 확인하기
      </Text>
      <LineChart
        data={{
          labels: ['06/06', '06/07', '06/08', '06/09', '06/10', '06/11'],
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
          backgroundColor: 'white',
          backgroundGradientFrom: 'white',
          backgroundGradientTo: 'white',
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `#8F6D82`,
          labelColor: (opacity = 1) => `#8F6D82`,
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
