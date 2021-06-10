// library imports
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Shadow } from 'react-native-shadow-2';

// component imports
import AppColor from '../config/AppColor';
import AppText from './AppText';

function AppMinimalCard({title, IconComponent, onPress}) {
    return (
        <View style={styles.border}>
            {/* shadow component */}
            <Shadow distance={10} radius={25} startColor={AppColor.darkgrey} offset={[0,2]}>
                <TouchableOpacity onPress={onPress} style={styles.box}>
                    <View style={styles.container}>
                        {/* icon component */}
                        <View style={styles.icon}>
                            {IconComponent}
                        </View>

                        {/* text component */}
                        <View style={styles.textContainer}>
                            <AppText style={styles.title}>{title}</AppText>
                        </View>
                    </View>
                </TouchableOpacity>
            </Shadow>
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
    border: {
        margin: 10,
    },
    title: {
        marginTop: 5,
        fontSize: 18,
        textAlign: 'center',
    },
})
export default AppMinimalCard;