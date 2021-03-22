import React from 'react';
import { StyleSheet, View } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import AppColor from '../config/AppColor';

function AppIcon({iconName, size, colorStyle}) {
    return (
        <View>
            <MaterialCommunityIcons name={iconName} size={size} style={colorStyle}/>
        </View>
    );
}

const styles = StyleSheet.create({
    icon: {
        color: AppColor.azure,
    }
})

export default AppIcon;