// library imports
import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons'

// component imports
import AppColor from '../config/AppColor';
import AppIcon from '../components/AppIcon';
import AppListItem from '../components/AppListItem';
import AppScreen from '../components/AppScreen';
import AppText from '../components/AppText';
import {useNavigation} from '@react-navigation/native';

function SettingsScreen({navigation, route}) {
    return (
        <AppScreen style={styles.container}>
            <View style={styles.headerContainer}>
                {/* profile picture */}
                <Image source={route.params.paramImage} style={styles.image}/>

                {/* user name */}
                <View style={styles.headerTextContainer}>
                    <AppText style={styles.title}>{route.params.paramName}</AppText>
                </View>
            </View>

            <View style={styles.subHeaderTextContainer}>
                {/* user email */}
                <AppListItem title={route.params.paramEmail} titleStyle="subtitle" IconComponent={
                    <AppIcon iconName="email-outline" size={24} colorStyle={{color: AppColor.blackblue}}/>
                }/>
                {/* user location */}
                <AppListItem title="Sydney, Australia" titleStyle="subtitle" IconComponent={
                    <AppIcon iconName="map-marker-outline" size={24} colorStyle={{color: AppColor.blackblue}}/>
                }/>
            </View>

            <View style={styles.settingsContainer}>
                {/* my favourites screen */}
                <AppListItem title="My Favourites" titleStyle="title" onPress={ () => navigation.navigate("MyFavorite")} IconComponent={
                    <AppIcon iconName="heart-outline" size={30} colorStyle={{color: AppColor.azure}}/>
                }/>
                {/* add listing screen */}
                <AppListItem title="Add Listing" titleStyle="title" containerStyle={{marginTop: 15}} onPress={ () => navigation.navigate("AddListing")} IconComponent={
                    <AppIcon iconName="note-plus-outline" size={30} colorStyle={{color: AppColor.azure}}/>
                }/>
                {/* logout component placeholder */}
                <AppListItem title="Logout" titleStyle="title" containerStyle={{marginTop: 15}} onPress={ () => console.log("Logout")} IconComponent={
                    <AppIcon iconName="logout" size={30} colorStyle={{color: AppColor.red}}/>
                }/>
            </View>
        </AppScreen>
    );
}

const styles = StyleSheet.create({
    container: {
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
        marginTop: 10,
        fontSize: 24,
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 16,
        fontStyle: 'italic',
    },
    subHeaderTextContainer: {
        marginLeft: 10,
    },
    settingsContainer: {
        marginLeft: 7,
        marginTop: 40,
    }
})

export default SettingsScreen;