import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import AppColor from '../config/AppColor';
import AppText from './AppText';

function AppListItem({title, IconComponent}) {
    return (
        <View style={styles.container}>

            <View style={styles.icon}>
                {IconComponent}
            </View>

            <View style={styles.textContainer}>
                <AppText style={styles.title}>{title}</AppText>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    icon: {
        margin: 25,
    },
    textContainer: {
        flexDirection: 'column',
    },
    title: {
        color: AppColor.blackblue,
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 25,
    },
})

export default AppListItem;