// library imports
import React from 'react';
import { View } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';

function AppIcon({iconName, size, colorStyle}) {
    return (
        <View>
            <MaterialCommunityIcons name={iconName} size={size} style={colorStyle}/>
        </View>
    );
}

export default AppIcon;