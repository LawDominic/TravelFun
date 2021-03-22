import React from 'react';
import { Text,StyleSheet } from 'react-native';
import AppColor from '../config/AppColor';

function AppText({style, children}) {
    return (
        <Text style={[styles.text, style]}>{children}</Text>
    );
}

const styles = StyleSheet.create({
    text:{
        fontFamily: 'Roboto',
        color: AppColor.blackblue,
    },
})


export default AppText;




    