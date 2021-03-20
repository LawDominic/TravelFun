import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import AppColor from '../config/AppColor';

function AppTextInput({icon, ...otherProps}) {
    return (
        <View style={styles.container}>
            {icon && <MaterialCommunityIcons name={icon} size={24} style={styles.icon}/>}
            <TextInput style={styles.textInput} {...otherProps}/>
        </View>
    );
}

const styles = StyleSheet.create({
    
    container:{
        backgroundColor: AppColor.lightergrey,
        flexDirection: 'row',
        borderRadius: 10, 
        padding: 10,
        marginVertical: 5,
        width:300,
    },
    textInput:{
        fontSize:16,
        fontFamily:'Roboto',
        color: AppColor.blackblue,
        marginLeft: 10,
        flex:1,
    },
    icon: {
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        color: AppColor.blackblue,
    }
})
export default AppTextInput;