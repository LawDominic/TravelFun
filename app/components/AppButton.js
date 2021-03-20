import React from 'react';
import { Text, TouchableOpacity, StyleSheet, View} from 'react-native';

import AppColor from '../config/AppColor';

function AppButton({style, title, color, textC, onPress}) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={[styles[style], {backgroundColor:AppColor[color]}]}>
                <Text style={[styles.text, {color:AppColor[textC]}]}>{title}</Text>
            </View>
        </TouchableOpacity>

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
    raisedButton:{
        backgroundColor: AppColor.blue,
        borderRadius: 10,
        width: 300,
        padding: 0,
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
