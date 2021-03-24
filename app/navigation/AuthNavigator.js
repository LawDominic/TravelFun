import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import ThingsToDoScreen from '../screens/ThingsToDoScreen';
import NatureScreen from '../screens/ThingsToDo/NatureScreen';
import MyFavoriteScreen from '../screens/MyFavoritesScreen';


const AppStack = createStackNavigator();

const AuthNavigator = () => (
    <AppStack.Navigator initialRouteName="ThingsToDo">
        {/* <AppStack.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/> */}
        <AppStack.Screen name="MyFavorite" component={MyFavoriteScreen} options={{headerShown:false}}/>
        <AppStack.Screen name="ThingsToDo" component={ThingsToDoScreen} options={{headerShown:false}}/>
        <AppStack.Screen name="Settings" component={SettingsScreen} options={{headerShown:false}}/>
        <AppStack.Screen name="Welcome" component={WelcomeScreen} options={{headerShown:false}}/>
        <AppStack.Screen name="Login" component={LoginScreen} options={{headerShown:false}}/>
        <AppStack.Screen name="Register" component={RegisterScreen} options={{headerShown:false}}/>
        <AppStack.Screen name="Nature" component={NatureScreen} options={{headerShown:false}}/>
    </AppStack.Navigator>
)

export default AuthNavigator;