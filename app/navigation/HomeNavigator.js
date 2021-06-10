import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import ListingScreen from '../screens/ListingScreen';
import HomeScreen from '../screens/HomeScreen';
import AppColor from '../config/AppColor';

const AppStack = createStackNavigator();

const HomeNavigator = () => (
    <AppStack.Navigator>
        <AppStack.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>
        <AppStack.Screen name="Listing" component={ListingScreen} options={{
                headerTitle: false, 
                headerTransparent: true,
                headerTintColor: AppColor.lightergrey,
                headerPressColorAndroid: AppColor.grey,
            }}
        />
    </AppStack.Navigator>
)

export default HomeNavigator;