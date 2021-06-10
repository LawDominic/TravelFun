import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const AppTab = createBottomTabNavigator();

import SettingsNavigator from './SettingsNavigator';
import HomeNavigator from './HomeNavigator';
import ThingsToDoNavigator from './ThingsToDoNavigator';
import AppColor from '../config/AppColor';
import AppIcon from '../components/AppIcon';

const TabNavigator = () => (
    <AppTab.Navigator tabBarOptions={{activeTintColor:AppColor.lightergrey, activeBackgroundColor:AppColor.grey}}>
        <AppTab.Screen name="Home" component={HomeNavigator} options={{tabBarIcon: () => <AppIcon size={30} iconName="home-outline" colorStyle={{color: AppColor.blackblue}}/>}}/>
        <AppTab.Screen name="ThingsToDo" component={ThingsToDoNavigator} options={{tabBarIcon: () => <AppIcon size={30} iconName="shape-outline" colorStyle={{color: AppColor.blackblue}}/>}}/>
        <AppTab.Screen name="Settings" component={SettingsNavigator} options={{tabBarIcon: () => <AppIcon size={30} iconName="cog-outline" colorStyle={{color: AppColor.blackblue}}/>}}/>  
    </AppTab.Navigator>
)

export default TabNavigator;