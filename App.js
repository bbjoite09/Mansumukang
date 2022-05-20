import React from 'react';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import AllStack from './src/elements/AllStack';

const App = () => {
  return (
    <NavigationContainer
      theme={{
        ...DefaultTheme,
        colors: {
          ...DefaultTheme.colors,
          background: 'white',
        },
      }}>
      <AllStack />
    </NavigationContainer>
  );
};

export default App;
