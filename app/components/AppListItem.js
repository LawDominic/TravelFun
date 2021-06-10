// library imports
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

// component imports
import AppColor from '../config/AppColor';
import AppText from './AppText';

function AppListItem({title, titleStyle, IconComponent, onPress, containerStyle}) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={[styles.container, containerStyle]}>

                {/* icon component */}
                <View style={styles.icon}>
                    {IconComponent}
                </View>

                {/* text component */}
                <View style={styles.textContainer}>
                    <AppText style={styles[titleStyle]}>{title}</AppText>
                </View>
            </View>
        </TouchableOpacity>
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
        color: AppColor.blackblue,
        fontSize: 14,
        marginLeft: 2,
        marginTop: 2,
        fontStyle: 'italic',
    }
})

export default AppListItem;