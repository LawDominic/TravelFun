import React from 'react';
import { Text, TouchableOpacity, StyleSheet, View} from 'react-native';

import AppColor from '../config/AppColor';
import { Shadow } from 'react-native-shadow-2';

function AppButton({style, title, color, textC, onPress}) {
    return (
        <Shadow distance={8} startColor={AppColor.lightergrey, AppColor.darkgrey} distance={20} radius={10} offset={[0, 10]}>
        <TouchableOpacity onPress={onPress}>
            <View style={[styles[style], {backgroundColor:AppColor[color]}]}>
                <Text style={[styles.text, {color:AppColor[textC]}]}>{title}</Text>
            </View>
        </TouchableOpacity>
        </Shadow>
    );
}

const styles = StyleSheet.create({
    button:{
        backgroundColor: AppColor.blue,
        borderRadius: 10,
        width: 300,
        padding: 5,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 0,
    },
    text:{
        color: AppColor.lightgrey,
        fontSize: 20,
        fontFamily: 'Roboto',
        fontWeight: 'bold',
    },
})

export default AppButton;
