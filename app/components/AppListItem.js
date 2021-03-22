import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import AppColor from '../config/AppColor';
import AppText from './AppText';

function AppListItem({title, titleStyle, IconComponent}) {
    return (
        <View style={styles.container}>

            <View style={styles.icon}>
                {IconComponent}
            </View>

            <View style={styles.textContainer}>
                <AppText style={styles[titleStyle]}>{title}</AppText>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: 10,
    },
    icon: {
        marginLeft: 20,
        marginRight: 20,
        marginTop: 0,
    },
    textContainer: {
        flexDirection: 'column',
    },
    title: {
        color: AppColor.blackblue,
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 3,
    },
    subtitle: {
        color: AppColor.grey,
        fontSize: 14,
        fontWeight:'bold',
        marginLeft: 2,
    }
})

export default AppListItem;