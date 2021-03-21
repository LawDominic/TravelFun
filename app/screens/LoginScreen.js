import React, {useState} from 'react';
import { ImageBackground, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Formik} from 'formik';
import * as yup from 'yup';

import AppButton from '../components/AppButton';
import AppColor from '../config/AppColor';
import AppScreen from '../components/AppScreen';
import AppText from '../components/AppText';
import AppTextInput from '../components/AppTextInput';

const schema = yup.object().shape(
    {
        email: yup.
            string()
            .required()
            .email()
            .label('Email'),
        password: yup
            .string()
            .required()
            .label('Password'),
    }
);
//TODO: Database
function LoginScreen({navigation}) {
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

            <Formik //TODO: Form validation and error handling
                initialValues={{email:'', password:'',}}
                onSubmit = {values => console.log(values)}
                validationSchema={schema}
                >
                
            {({handleChange, handleSubmit, errors, setFieldTouched, touched}) => (
            <>
                <View style={styles.textInput}>
                    {touched.email && <AppText>{errors.email}</AppText>}
                    <AppTextInput
                                autoCapitalize='none'
                                autoCorrect={false}
                                icon='email'
                                placeholder='Email address'
                                textContentType='emailAddress'
                                onBlur = {() => setFieldTouched('email')}
                                onChangeText = { handleChange('email') }
                    /> 
                    {touched.password && <AppText>{errors.password}</AppText>}
                    <AppTextInput
                                autoCapitalize='none'
                                autoCorrect={false}
                                icon='lock'
                                placeholder='Password'
                                secureTextEntry
                                textContentType='password'
                                onBlur = {() => setFieldTouched('password')}
                                onChangeText = { handleChange('password') }
                    />   
                </View>

                <View style={styles.loginBtn}>
                    <AppButton style="button" title="Login" color="blue" textC="lightergrey" onPress={handleSubmit}/>
                </View>

                </>
            )}

            </Formik>

            <View>
                <AppText style={styles.newMemberMsg}>
                    <TouchableWithoutFeedback>
                        <View>
                            <AppText>
                            I'm a new member,
                            </AppText>
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableOpacity onPress={ () => navigation.navigate("Register")}>
                        <AppText style={styles.signUpMsg}> Sign Up</AppText>
                    </TouchableOpacity>
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
    loginBtn: {
        marginTop: 80,
        alignItems: 'center',
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
    signUpMsg: {
        color: AppColor.blue,
        fontSize: 16,
        fontWeight: 'bold',
    }
})


export default LoginScreen;