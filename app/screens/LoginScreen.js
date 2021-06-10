// library imports
import React, {useState} from 'react';
import { ImageBackground, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Formik} from 'formik';
import * as yup from 'yup';

// component imports
import AppButton from '../components/AppButton';
import AppColor from '../config/AppColor';
import AppScreen from '../components/AppScreen';
import AppText from '../components/AppText';
import AppTextInput from '../components/AppTextInput';
import DataManager from '../config/DataManager';

// yup form
const schema = yup.object().shape(
    {
        email: yup.
            string()
            .required()
            .email()
            .label("Email"),
        password: yup
            .string()
            .required()
            .label("Password"),
    }
);

// users list
const users = [
    {
        id: 1,
        name: "Keanu Reeves",
        email: "kr@kr.com",
        password: "1111",
        image: require('../assets/keanu_reeves.jpg'),
    }
]

// validation of user login
const validateUser = ({email, password}) => {
    return (
        users.filter((user) => user.email === email && user.password === password).length > 0
    )
}

// get user credentials
const getUser = ({email}) => {
    return users.find((user) => user.email === email);
}

// set userID after login
const createUser = ({email}) => {
    let commonData = DataManager.getInstance();
    let userID = getUser({email}).id;
    commonData.setUserID(userID);
}

function LoginScreen({navigation}) {
    return (
        <AppScreen style={styles.container}>
            
            {/* background image */}
            <ImageBackground
                source={require('../assets/bg-img.jpeg')}
                style={styles.bgimg}>
            
            {/* opacity overlay */}
            <View style={styles.overlay}/>

            {/* text */}
            <View>
                <AppText style={styles.registerHeadeMsg}>
                    Sign In
                </AppText>

                <AppText style={styles.registerBodyMsg}>
                    Continue your adventure where you left off!
                </AppText>
            </View>

            {/* formik form handling*/}
            <Formik
                initialValues={{email:'', password:'',}}
                onSubmit = {(values, {resetForm}) => {
                    if (validateUser(values)){
                        resetForm();
                        createUser(values);
                        navigation.navigate("Home", {
                            screen: "Settings",
                            params: {
                                screen: "Settings",
                                params: {
                                    paramEmail: values.email,
                                    paramName: getUser(values).name,
                                    paramImage: getUser(values).image,
                                }
                            }
                        });
                    } else {
                        resetForm();
                        alert("Invalid login details")
                    }
                }}
                validationSchema={schema}
                >
                
            {({handleChange, handleSubmit, errors, setFieldTouched, touched}) => (
            <>
                <View style={styles.textInput}>
                    {/* user input - email */}
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

                    {/* user input - password */}
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

                {/* login button */}
                <View style={styles.loginBtn}>
                    <AppButton title="Login" color="blue" textC="lightergrey" onPress={handleSubmit}/>
                </View>

                </>
            )}

            </Formik>

            {/* new member message */}
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
        top: 100,
        alignItems: 'center',
    },
    newMemberMsg: {
        color: AppColor.blackblue,
        top: 130,
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