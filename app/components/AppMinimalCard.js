import React from 'react';
import { StyleSheet, View } from 'react-native';

import AppColor from '../config/AppColor';
import AppText from './AppText';

function AppMinimalCard({title, IconComponent}) {
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
        alignItems: 'center',
        backgroundColor: AppColor.grey,
        height: 160,
        width: 160,
        borderRadius: 25,
        justifyContent: 'center',
    },
    textContainer: {

    },
    title: {
        marginTop: 5,
        fontSize: 18,
        textAlign: 'center',
    },
})
export default AppMinimalCard;