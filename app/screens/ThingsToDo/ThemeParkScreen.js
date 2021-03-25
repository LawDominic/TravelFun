import React from 'react';
import { StyleSheet, View } from 'react-native';
import {useNavigation} from '@react-navigation/native';

import AppScreen from '../../components/AppScreen';
import AppText from '../../components/AppText';


function ThemeParkScreen({navigation}) {
    return (
        <AppScreen style={styles.container}>
            <View>
                <AppText>asd</AppText>
            </View>
        </AppScreen>
    );
}

const styles = StyleSheet.create({
    container: {

    }, 
})

export default ThemeParkScreen;