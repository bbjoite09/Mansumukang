import React from 'react';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import BottomTabs from './src/elements/BottomTabs';

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
      <BottomTabs />
    </NavigationContainer>
  );
};

export default App;
