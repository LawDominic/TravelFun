import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';

const AppStack = createStackNavigator();

export default function AuthStack() {
  return (
    <AppStack.Navigator initialRouteName='Login'>
      <AppStack.Screen
        name='Login'
        component={LoginScreen}
        options={{ header: () => null }}
      />
      <AppStack.Screen name='Register' component={RegisterScreen} options={{ header: () => null }}/>
    </AppStack.Navigator>
  );
}