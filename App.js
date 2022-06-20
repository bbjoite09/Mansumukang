import React from 'react';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import AllStack from './src/elements/AllStack';
import {SearchContextProvider} from './src/contexts/SearchContext';
import {LogContextProvider} from './src/contexts/LogContext';
const App = () => {
  return (
    // navigation 배경을 흰색으로 설정해준다.
    <NavigationContainer
      theme={{
        ...DefaultTheme,
        colors: {
          ...DefaultTheme.colors,
          background: 'white',
        },
      }}>
      <SearchContextProvider>
        <LogContextProvider>
          <AllStack />
        </LogContextProvider>
      </SearchContextProvider>
    </NavigationContainer>
  );
};

export default App;
