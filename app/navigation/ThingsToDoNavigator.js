import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import ThingsToDoScreen from '../screens/ThingsToDoScreen'
import CategoryScreen from '../screens/CategoryScreen';
import CategoryNavigator from './CategoryNavigator';
import ListingScreen from '../screens/ListingScreen';
import AppColor from '../config/AppColor';

const AppStack = createStackNavigator();

const ThingsToDoNavigator = () => (
    <AppStack.Navigator>
        <AppStack.Screen name="ThingsToDo" component={ThingsToDoScreen} options={{headerShown: false}}/>
        <AppStack.Screen name="Category" component={CategoryNavigator} options={{headerTitle:false, headerTransparent: true}}/>
        <AppStack.Screen name="Listing" component={ListingScreen} 
            options={{
                headerTitle: false, 
                headerTransparent: true,
                headerTintColor: AppColor.lightergrey,
                headerPressColorAndroid: AppColor.grey,
            }}
        />

    </AppStack.Navigator>
)

export default ThingsToDoNavigator;