import React, {useState} from 'react';
import { Image, ImageBackground, StyleSheet, View } from 'react-native';
import {useNavigation} from '@react-navigation/native';

import AppButton from '../components/AppButton';
import AppColor from '../config/AppColor';
import AppScreen from '../components/AppScreen';
import AppText from '../components/AppText';
import AppTextInput from '../components/AppTextInput';

function LoginScreen({navigation}) {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    return (
        <AppScreen style={styles.container}>
            
            <ImageBackground
                source={require('../assets/bg-img.jpeg')}
                style={styles.bgimg}>
            <View style={styles.overlay}/>

            <View>
                <AppText style={styles.registerHeadeMsg}>
                    Sign In
                </AppText>

                <AppText style={styles.registerBodyMsg}>
                    Continue your adventure where you left off!
                </AppText>
            </View>

            <View style={styles.textInput}>
                <AppTextInput
                            autoCapitalize='none'
                            autoCorrect={false}
                            icon='email'
                            placeholder='Email address'
                            textContentType='emailAddress'
                            onChangeText = { userInputEmail => setEmail(userInputEmail)}
                /> 
                <AppTextInput
                            autoCapitalize='none'
                            autoCorrect={false}
                            icon='lock'
                            placeholder='Password'
                            secureTextEntry
                            textContentType='password'
                            onChangeText = { userInputPW => setPassword(userInputPW)}
                />   
            </View>

            <View style={styles.registerBtn}>
                <AppButton style="button" title="Create an account" color="blue" textC="lightergrey" onPress={() => console.log(email,password)}/>
            </View>

            <View>
                <AppText style={styles.newMemberMsg}>
                    I'm a new member <AppText onPress={ () => navigation.navigate("Register")} style={styles.signInMsg}>Sign Up
                    </AppText>
                </AppText>
            </View>


            </ImageBackground>
        </AppScreen>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    },
    bgimg: {
        flex: 1,
        backgroundColor: 'black',
    },
    newMemberMsg: {
        color: AppColor.blackblue,
        marginTop: 110,
        textAlign: 'center',
        fontSize: 14,
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: AppColor.lightgrey,
        opacity: 0.9,
        alignItems: 'center',
    },
    registerBtn: {
        marginTop: 80,
        alignItems: 'center',
    },
    textInput: {
        alignItems: 'center',
        marginTop: 100,
    },
    registerHeadeMsg: {
        color: AppColor.blackblue,
        fontSize: 42,
        fontWeight: 'bold',
        top: 100,
        left: 40,
    },
    registerBodyMsg: {
        color: AppColor.blackblue,
        fontWeight: 'normal',
        fontSize: 18,
        left: 40,
        marginTop: 110,
        width: 300,
    },
    signInMsg: {
        color: AppColor.blue,
        fontSize: 16,
        fontWeight: 'bold',
    }
})


export default LoginScreen;