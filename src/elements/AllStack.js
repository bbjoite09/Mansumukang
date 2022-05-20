import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Information from '../components/Information';
import Activity from '../components/Activity';
import CheckList from '../components/CheckList';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="diary" component={CheckList} />
      <Tab.Screen name="activity" component={Activity} />
      <Tab.Screen name="information" component={Information} />
    </Tab.Navigator>
  );
};

const Stack = createNativeStackNavigator();

const AllStack = () => {
  return (
    <Stack.Navigator initialRouteName="TabNavi">
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
        options={{headerShown: true}}
      />
    </Stack.Navigator>
  );
};
export default AllStack;
