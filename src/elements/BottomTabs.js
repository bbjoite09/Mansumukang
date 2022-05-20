import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Information from '../components/Information';
import Activity from '../components/Activity';

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

export default BottomTabs;
