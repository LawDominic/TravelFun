import React from 'react';
import { StyleSheet, Image, ImageBackground, View } from 'react-native';
import {useNavigation} from '@react-navigation/native';

import AppButton from '../components/AppButton';
import AppColor from '../config/AppColor';
import AppScreen from '../components/AppScreen';
import AppText from '../components/AppText';

function WelcomeScreen({navigation}) {
    return (
        <AppScreen>
            <ImageBackground
                source={require('../assets/bg-img.jpeg')}
                style={styles.background}>
            <View style={styles.overlay}>

                <Image source={require('../assets/icon.png')} style={styles.icon}>

                </Image>

                <AppText style={styles.headerFirst}>
                    Travel
                    <AppText style={styles.headerSecond}>
                        Fun
                    </AppText>
                </AppText>

                <View style={styles.loginBtn}>
                    <AppButton style="button" title="Login" color="blue" textC="lightergrey" onPress={ () => navigation.navigate("Login")}/>
                </View>
                
                <View style={styles.registerBtn}>
                    <AppButton style="button" title="Create an account" color="lightergrey" textC="blackblue" onPress={ () => navigation.navigate("Register")}/>
                </View>

            </View>
            </ImageBackground>
        </AppScreen>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: 'black',
    },
    headerFirst: {
        color: AppColor.blue,
        fontWeight: 'bold',
        fontSize: 42,
    },
    headerSecond: {
        color: AppColor.pink,
    },
    icon: {
        height: 180,
        justifyContent: 'center',
        marginTop: 140,
        width: 180,  
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: AppColor.lightgrey,
        opacity: 0.9,
        alignItems: 'center',
    },
    loginBtn: {
        top: 200,
    },
    registerBtn: {
        top: 210,
    },
})

export default WelcomeScreen;