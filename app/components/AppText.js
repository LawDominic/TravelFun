// library imports
import React from 'react';
import { StyleSheet, Text } from 'react-native';

// component imports
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




    