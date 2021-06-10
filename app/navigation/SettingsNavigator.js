import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import ListingScreen from '../screens/ListingScreen';
import HomeScreen from '../screens/HomeScreen';

import SettingsScreen from '../screens/SettingsScreen';
import MyFavoriteScreen from '../screens/MyFavoriteScreen';
import AddListingScreen from '../screens/AddListingScreen';
import HomeNavigator from './HomeNavigator';

import AppColor from '../config/AppColor';

const AppStack = createStackNavigator();

const SettingsNavigator = () => (
    <AppStack.Navigator>
        <AppStack.Screen name="Settings" component={SettingsScreen} options={{headerShown:false}}/>
        <AppStack.Screen name="Home" component={HomeNavigator} options={{headerShown:false}}/>
        <AppStack.Screen name="MyFavorite" component={MyFavoriteScreen} options={{
                headerTitle: false, 
                headerTransparent: true,
                headerTintColor: AppColor.blackblue,
                headerPressColorAndroid: AppColor.blackblue,
            }}
        />
        <AppStack.Screen name="AddListing" component={AddListingScreen} options={{
                headerTitle: false, 
                headerTransparent: true,
                headerTintColor: AppColor.blackblue,
                headerPressColorAndroid: AppColor.blackblue,
            }}
        />
        <AppStack.Screen name="Listing" component={ListingScreen} options={{
                headerTitle: false, 
                headerTransparent: true,
                headerTintColor: AppColor.blackblue,
                headerPressColorAndroid: AppColor.blackblue,
            }}
        />
        
    </AppStack.Navigator>
)

export default SettingsNavigator;