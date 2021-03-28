import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const AppTab = createBottomTabNavigator();

import HomeScreen from '../screens/HomeScreen';
import ThingsToDoScreen from '../screens/ThingsToDoScreen';
import SettingsScreen from '../screens/SettingsScreen';
import AppColor from '../config/AppColor';
import AppIcon from '../components/AppIcon';

const TabNavigator = () => (
    <AppTab.Navigator tabBarOptions={{activeTintColor:AppColor.lightergrey, activeBackgroundColor:AppColor.grey}}>
        <AppTab.Screen name="Home" component={ThingsToDoScreen} options={{tabBarIcon: () => <AppIcon size={30} iconName="home-outline" colorStyle={{color: AppColor.blackblue}}/>}}/>
        <AppTab.Screen name="ThingsToDo" component={ThingsToDoScreen} options={{tabBarIcon: () => <AppIcon size={30} iconName="shape-outline" colorStyle={{color: AppColor.blackblue}}/>}}/>
        <AppTab.Screen name="Settings" component={SettingsScreen} options={{tabBarIcon: () => <AppIcon size={30} iconName="cog-outline" colorStyle={{color: AppColor.blackblue}}/>}}/>  
    </AppTab.Navigator>
)

export default TabNavigator;