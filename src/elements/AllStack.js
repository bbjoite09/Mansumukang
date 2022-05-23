import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Information from '../components/Information';
import Activity from '../components/Activity';
import CheckList from '../components/CheckList';
import R5Info from '../components/R5Info';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="diary" component={Information} />
      <Tab.Screen name="activity" component={Activity} />
      <Tab.Screen name="information" component={Information} />
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
    </Stack.Navigator>
  );
};
export default AllStack;
