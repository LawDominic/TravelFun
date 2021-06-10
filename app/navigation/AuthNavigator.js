import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';

import TabNavigator from './TabNavigator';
import HomeNavigator from './HomeNavigator';
import SettingsNavigator from './SettingsNavigator';
import ThingsToDoNavigator from './ThingsToDoNavigator';

const AppStack = createStackNavigator();

const AuthNavigator = () => (
    <AppStack.Navigator>
        <AppStack.Screen name="Welcome" component={WelcomeScreen} options={{headerShown:false}}/>
        <AppStack.Screen name="Login" component={LoginScreen} options={{headerShown:false}}/>
        <AppStack.Screen name="Register" component={RegisterScreen} options={{headerShown:false}}/>
        <AppStack.Screen name="Home" component={TabNavigator} options={{headerShown:false}}/>
        <AppStack.Screen name="ThingsToDo" component={ThingsToDoNavigator} options={{headerShown:false}}/>
        <AppStack.Screen name="Settings" component={SettingsNavigator} options={{headerShown:false}}/>
    </AppStack.Navigator>
)

export default AuthNavigator;