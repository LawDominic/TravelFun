import React from 'react';
import { LogBox } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import AuthNavigator from './app/navigation/AuthNavigator';
import TabNavigator from './app/navigation/TabNavigator';

LogBox.ignoreLogs(['VirtualizedLists']);

export default function App() {
  return (  

    <NavigationContainer>
      <AuthNavigator/>
    </NavigationContainer>

  );
}


