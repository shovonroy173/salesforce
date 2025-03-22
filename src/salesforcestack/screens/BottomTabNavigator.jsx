/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import BasicScreen from './BasicScreen';
import TransactionScreen from './TransactionScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import ReportScreen from './ReportScreen';
import SettingsScreen from './SettingsScreen';
import {View} from 'react-native';
import Logout from '../../components/Logout';
const BottomTabNavigator = () => {
  const BottomTab = createBottomTabNavigator();
  return (
    <View className="flex-1">
      <Logout />
      <BottomTab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: '#ffffff',
          tabBarInactiveTintColor: '#9ca3af',
          tabBarStyle: {backgroundColor: '#3f3f46', height: 70, paddingTop: 10},
          tabBarLabelStyle: {
            fontFamily: 'Poppins-Medium',
            fontSize: responsiveFontSize(1.5),
          },
        }}>
        <BottomTab.Screen
          name="Basic"
          component={BasicScreen}
          options={{
            tabBarIcon: ({color, size, focused}) => (
              <Ionicons
                name="grid-outline"
                color={color}
                size={focused ? size : 20}
              />
            ),
          }}
        />
        <BottomTab.Screen
          name="Transaction"
          component={TransactionScreen}
          options={{
            tabBarIcon: ({color, size, focused}) => (
              <Feather
                name="bar-chart-2"
                color={color}
                size={focused ? size : 20}
              />
            ),
          }}
        />
        <BottomTab.Screen
          name="Report"
          component={ReportScreen}
          options={{
            tabBarIcon: ({color, size, focused}) => (
              <Ionicons
                name="qr-code-outline"
                color={color}
                size={focused ? size : 20}
              />
            ),
          }}
        />
        <BottomTab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            tabBarIcon: ({color, size, focused}) => (
              <Feather
                name="settings"
                color={color}
                size={focused ? size : 20}
              />
            ),
          }}
        />
      </BottomTab.Navigator>
    </View>
  );
};

export default BottomTabNavigator;
