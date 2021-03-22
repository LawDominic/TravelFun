import React from 'react';

import {BoxShadow} from 'react-native-shadow'
import AppColor from '../config/AppColor';
import AppText from './AppText';

// SETTINGS

function AppShadow({setting, width, height}) {
    return (
        <View>
            <BoxShadow setting={shadowOpt}>
                <View style={{width:160,height:160}}/>
            </BoxShadow>
        </View>
    );
}

export default class AppShadow {
    render = () => {
        const shadowOpt = {
            width:100,
            height:100,
            color:AppColor.black,
            border:2,
            radius:3,
            opacity:1,
            x:0,
            y:3,
            style:{marginVertical:5}
        }
    
        return (
            <View>
                <BoxShadow setting={shadowOpt}>
                    <View style={{width:160,height:160}}/>
                </BoxShadow>
            </View>
        );
    }  
};