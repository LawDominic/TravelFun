import React, {useState} from 'react';
import { ImageBackground, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Formik} from 'formik';
import * as yup from 'yup';
// import * as SQLite from 'expo-sqlite';

import AppButton from '../components/AppButton';
import AppColor from '../config/AppColor';
import AppScreen from '../components/AppScreen';
import AppText from '../components/AppText';
import AppTextInput from '../components/AppTextInput';

const schema = yup.object().shape(
    {
        fullName: yup
            .string()
            .required()
            .label('Full Name'),
        email: yup.
            string()
            .required()
            .email()
            .label('Email'),
        password: yup
            .string()
            .required()
            .min(8)
            .max(16)
            .label('Password'),
    }
);
//TODO: Database
function RegisterScreen({navigation}) {
    return (
        <AppScreen style={styles.container}>
            
            <ImageBackground
                source={require('../assets/bg-img.jpeg')}
                style={styles.bgimg}>
            <View style={styles.overlay}/>
            <View>
                <AppText style={styles.registerHeadeMsg}>
                    Sign Up
                </AppText>

                <AppText style={styles.registerBodyMsg}>
                    Create an account to start your adventure in your city!
                </AppText>
            </View>

            <Formik //TODO: Form validation and error handling
                initialValues={{fullName:'', email:'', password:'',}}
                onSubmit = {values => console.log(values)}
                validationSchema={schema}
                >

            {({handleChange, handleSubmit, errors, setFieldTouched, touched}) => (
                <>
                <View style={styles.textInput}>
                    <AppTextInput
                                autoCapitalize='words'
                                autoCorrect={false}
                                icon='account-box'
                                placeholder='Full Name'
                                textContentType='name'
                                onBlur = {() => setFieldTouched('fullName')}
                                onChangeText = { handleChange('fullName') }
                    /> 
                    {touched.fullName && <AppText>{errors.fullName}</AppText>}
                    <AppTextInput
                                autoCapitalize='none'
                                autoCorrect={false}
                                icon='email'
                                placeholder='Email address'
                                textContentType='emailAddress'
                                onBlur = {() => setFieldTouched('email')}
                                onChangeText = { handleChange('email') }
                    /> 
                    {touched.email && <AppText>{errors.email}</AppText>}
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
                    {touched.password && <AppText>{errors.password}</AppText>}
 
                </View>

                <View style={styles.registerBtn}>
                    <AppButton style="button" title="Create an account" color="blue" textC="lightergrey" onPress={handleSubmit}/>
                    
                </View>
                </>
            )}        

            </Formik>
            
            <View>
                <AppText style={styles.existingMemberMsg}>
                    <TouchableWithoutFeedback>
                        <View>
                            <AppText>
                            I'm an existing member,
                            </AppText>
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableOpacity onPress={ () => navigation.navigate("Login")}>
                        <AppText style={styles.signInMsg}> Sign In</AppText>
                    </TouchableOpacity>
                </AppText>
            </View>

            </ImageBackground>
        </AppScreen>
    );
}

const styles = StyleSheet.create({
    test: {

    },
    bgimg: {
        flex: 1,
        backgroundColor: 'black',
    },
    container: {
        flex: 1,
        backgroundColor: 'black',
    },
    existingMemberMsg: {
        top: 330,
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
        top: 310,
        alignItems: 'center',
    },
    textInput: {
        alignItems: 'center',
        top: 180,
    },
    registerHeadeMsg: {
        fontSize: 42,
        fontWeight: 'bold',
        top: 100,
        left: 40,
    },
    registerBodyMsg: {
        fontWeight: 'normal',
        fontSize: 18,
        left: 40,
        top: 110,
        width: 300,
    },
    signInMsg: {
        color: AppColor.blue,
        fontSize: 16,
        fontWeight: 'bold',
    }
})

export default RegisterScreen;