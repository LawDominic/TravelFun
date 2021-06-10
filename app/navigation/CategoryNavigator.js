import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import ListingScreen from '../screens/ListingScreen';
import CategoryScreen from '../screens/CategoryScreen';
import AppColor from '../config/AppColor';

const AppStack = createStackNavigator();

const CategoryNavigator = () => (
    <AppStack.Navigator>
        <AppStack.Screen name="Category" component={CategoryScreen} options={{
                headerTitle: false, 
                headerTransparent: true,
                headerTintColor: AppColor.lightergrey,
                headerPressColorAndroid: AppColor.grey,
            }}
        />
        <AppStack.Screen name="Listing" component={ListingScreen} options={{
                headerTitle: false, 
                headerTransparent: true,
            }}
        />

    </AppStack.Navigator>
)

export default CategoryNavigator;