// library imports
import React from 'react';
import { StyleSheet, Image, ImageBackground, View } from 'react-native';
import {useNavigation} from '@react-navigation/native';

// component imports
import AppButton from '../components/AppButton';
import AppColor from '../config/AppColor';
import AppScreen from '../components/AppScreen';
import AppText from '../components/AppText';

function WelcomeScreen({navigation}) {
    return (
        <AppScreen>
            {/* image background */}
            <ImageBackground
                source={require('../assets/bg-img.jpeg')}
                style={styles.background}>

                {/* opacity overlay */}
                <View style={styles.overlay}>

                {/* app logo */}
                <Image source={require('../assets/icon.png')} style={styles.icon}/>

                {/* app name */}
                <AppText style={styles.headerFirst}>
                    Travel
                    <AppText style={styles.headerSecond}>
                        Fun
                    </AppText>
                </AppText>

                {/* login button */}
                <View style={styles.loginBtn}>
                    <AppButton title="Login" color="blue" textC="lightergrey" onPress={ () => navigation.navigate("Login")}/>
                </View>
                
                {/* register button */}
                <View style={styles.registerBtn}>
                    <AppButton title="Create an account" color="lightergrey" textC="blackblue" onPress={ () => navigation.navigate("Register")}/>
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