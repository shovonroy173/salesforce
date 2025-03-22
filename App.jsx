import React from 'react';
import './global.css';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StatusBar, useColorScheme} from 'react-native';

import LoginScreen from './src/authstack/screens/LoginScreen';

import BottomTabNavigator from './src/salesforcestack/screens/BottomTabNavigator';
import RegisterScreen from './src/authstack/screens/RegisterScreen';

const Stack = createNativeStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false, animation: 'slide_from_left'}}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
}

function SalesForceStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="BottomTabNavigator" component={BottomTabNavigator} />
    </Stack.Navigator>
  );
}

const auth = false;

function App() {
  const theme = useColorScheme();

  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1">
        <StatusBar
          barStyle={theme === 'dark' ? 'light-content' : 'dark-content'}
          backgroundColor={theme === 'dark' ? '#000000' : '#ffffff'}
        />
        <NavigationContainer
          theme={theme === 'dark' ? DarkTheme : DefaultTheme}>
          {auth ? <AuthStack /> : <SalesForceStack />}
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default App;
