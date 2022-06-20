import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Information from '../components/Information';
import Activity from '../components/Activity';
import CheckList from './activity/CheckList';
import R5Info from './activity/R5Info';
import {Image, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import SearchHeader from '../components/SearchHeader';
import FeedsScreen from '../components/FeedsScreen';
import CalendarScreen from '../components/CalendarScreen';
import SearchScreen from '../components/SearchScreen';
import WriteScreen from '../components/WriteScreen';
const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        name="녹색일기 쓰기"
        component={FeedsScreen}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <Image
                source={require('../assets/shared/pencil.png')}
                style={{width: 30, height: 30}}
              />
            ) : (
              <Image
                source={require('../assets/shared/pencil_no.png')}
                style={{width: 30, height: 30}}
              />
            ),
        }}
      />
      <Tab.Screen
        name="달력"
        component={CalendarScreen}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <Image
                source={require('../assets/shared/diary.png')}
                style={{width: 30, height: 30}}
              />
            ) : (
              <Image
                source={require('../assets/shared/diary_no.png')}
                style={{width: 30, height: 30}}
              />
            ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          title: '검색',
          tabBarIcon: ({focused}) =>
            !focused ? (
              <Image
                source={require('../assets/shared/search_no.png')}
                style={{width: 30, height: 30}}
              />
            ) : (
              <Image
                source={require('../assets/shared/search.png')}
                style={{width: 30, height: 30}}
              />
            ),
          headerTitle: () => <SearchHeader />,
        }}
      />
      <Tab.Screen
        name="녹색활동"
        component={Activity}
        options={{
          tabBarIcon: ({focused}) =>
            !focused ? (
              <Image
                source={require('../assets/shared/activity_no.png')}
                style={{width: 30, height: 30}}
              />
            ) : (
              <Image
                source={require('../assets/shared/activity.png')}
                style={{width: 30, height: 30}}
              />
            ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="정보"
        component={Information}
        options={{
          tabBarIcon: ({focused}) =>
            !focused ? (
              <Image
                source={require('../assets/shared/info_no.png')}
                style={{width: 30, height: 30}}
              />
            ) : (
              <Image
                source={require('../assets/shared/info.png')}
                style={{width: 30, height: 30}}
              />
            ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

const Stack = createNativeStackNavigator();

const AllStack = () => {
  return (
    <Stack.Navigator initialRouteName="BottomTabs">
      <Stack.Screen
        name="BottomTabs"
        component={BottomTabs}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Activity"
        component={Activity}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CheckList"
        component={CheckList}
        options={{
          headerShown: true,
          headerTitle: '',
        }}
      />
      <Stack.Screen
        name="R5Info"
        component={R5Info}
        options={{
          headerShown: true,
          headerTitle: '',
        }}
      />
      <Stack.Screen
        name="WriteScreen"
        component={WriteScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};
export default AllStack;
