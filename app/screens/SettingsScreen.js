import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

import AppColor from '../config/AppColor';
import AppIcon from '../components/AppIcon';
import AppListItem from '../components/AppListItem';
import AppScreen from '../components/AppScreen';
import AppText from '../components/AppText';
import {useNavigation} from '@react-navigation/native';

import {MaterialCommunityIcons} from '@expo/vector-icons'

function SettingsScreen({navigation}) {
    return (
        <AppScreen style={styles.container}>
            <View style={styles.headerContainer}>
                <Image source={require('../assets/keanu_reeves.jpg')} style={styles.image}/>

                <View style={styles.headerTextContainer}>
                    <AppText style={styles.title}>Keanu Reeves</AppText>
                    <AppText style={styles.subtitle}>@johnwick</AppText>
                </View>
            </View>
            
            {/* TODO: Fix email/location section */}

            <View style={styles.subHeaderTextContainer}>
                <AppListItem title="keanu.reeves@gmail.com" IconComponent={
                    <AppIcon iconName="email-outline" size={24} colorStyle={{color: AppColor.grey}}/>
                }/>
            </View>

            <AppListItem title="My Favorites" IconComponent={
                <AppIcon iconName="heart-outline" size={30} colorStyle={{color: AppColor.azure}}/>
            }/>

            <AppListItem title="zxc" textStyle="subtitle"/>
        </AppScreen>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: AppColor.lightergrey,
        flex: 1,
    },
    image: {
        borderRadius: 50,
        height: 100,
        width: 100,
        margin: 25,
    },
    headerContainer: {
        flexDirection: 'row',
        marginTop: 40,
    },
    headerTextContainer: {
        flexDirection: 'column',
        marginTop: 45,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 16,
        fontStyle: 'italic',
    },
    subHeaderTextContainer: {
        marginLeft: 3,
    }
})

export default SettingsScreen;