// library imports
import React from 'react';
import { Image, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';

// component imports
import AppButton from '../components/AppButton';
import AppColor from '../config/AppColor';
import AppIcon from '../components/AppIcon';
import AppPicker from '../components/AppPicker';
import AppScreen from '../components/AppScreen';
import AppText from '../components/AppText';
import AppTextInput from '../components/AppTextInput';
import DataManager from '../config/DataManager';

function AddListingScreen({navigation}) {

    // user input useStates
    const [name, setName] = React.useState("")
    const [categoryName, setCategoryName] = React.useState("")
    const [category, setCategory] = React.useState()
    const [lat, setLat] = React.useState("")
    const [lon, setLon] = React.useState("")
    const [city, setCity] = React.useState("")
    const [content, setContent] = React.useState("")
    const [selectedURI, setSelectedURI] = React.useState(null)

    // user input validation useStates
    const [nameError, setNameError] = React.useState("")
    const [categoryNameError, setCategoryNameError] = React.useState("")
    const [latError, setLatError] = React.useState("")
    const [lonError, setLonError] = React.useState("")
    const [cityError, setCityError] = React.useState("")
    const [contentError, setContentError] = React.useState("")
    const [imageError, setImageError] = React.useState("")

    // image picker function
    let openImagePickerAsync = async () => {
        let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    
        if (permissionResult.granted === false) {
          alert("Permission to access camera roll is required!");
          return;
        }
    
        let pickerResult = await ImagePicker.launchImageLibraryAsync();
        setSelectedURI(pickerResult.uri)
    }

    // user input validation function
    const doErrorCheck = () => {
        setNameError( name.length>0 ? "" : "Please set a valid Listing Name");
        setCategoryNameError( categoryName.length>0 ? "" : "Please set a valid Listing Category");
        setLatError( lat.length>0 ? "" : "Please set a valid Listing Latittude");
        setLonError( lon.length>0 ? "" : "Please set a valid Listing Longittude");
        setCityError( city.length>0 ? "" : "Please set a valid Listing City");
        setContentError( content.length>0 ? "" : "Listing Content should not be empty")
        setImageError( selectedURI == null ? "" : "Please add a valid Listing Image")

        return ((name.length>0) && (categoryName.length>0) && (lat.length>0) && (lon.length>0) && (city.length>0) && (content.length>0)? true : false )
    }

    return (
        <AppScreen>
            <View style={styles.titleContainer}>
                <AppText style={styles.title}>Add Listing</AppText>
            </View>

            <ScrollView style={styles.container}>

                {/* user input - location name */}
                <AppTextInput
                    placeholder='Name'
                    containerStyle={{backgroundColor: AppColor.grey, width:'100%'}}
                    value={name}
                    onChangeText={(inputText) => setName(inputText)}
                />

                {nameError.length>0 ? <AppText style={styles.error}>{nameError}</AppText>: <></>}

                {/* user input - category */}
                <View style={styles.dropdown}>
                    <AppPicker
                        selectedItem={category}
                        onSelectItem = {item => setCategoryName(item)}
                        option="category" 
                        placeholder="Category"
                    />
                </View>

                {categoryNameError.length>0 ? <AppText style={styles.error}>{categoryNameError}</AppText>: <></>}

                {/* user input - latitude */}
                <AppTextInput
                    placeholder='Latitude'
                    containerStyle={{backgroundColor: AppColor.grey, width:'100%'}}
                    keyboardType='decimal-pad'
                    value={lat}
                    onChangeText={(inputText) => setLat(inputText)}
                />

                {latError.length>0 ? <AppText style={styles.error}>{latError}</AppText>: <></>}

                {/* user input - longitude */}
                <AppTextInput
                    placeholder='Longitude'
                    containerStyle={{backgroundColor: AppColor.grey, width:'100%'}}
                    keyboardType='decimal-pad'
                    value={lon}
                    onChangeText={(inputText) => setLon(inputText)}
                />

                {lonError.length>0 ? <AppText style={styles.error}>{lonError}</AppText>: <></>}

                {/* user input - city */}
                <AppTextInput
                    placeholder='City'
                    containerStyle={{backgroundColor: AppColor.grey, width:'100%'}}
                    value={city}
                    onChangeText={(inputText) => setCity(inputText)}
                />

                {cityError.length>0 ? <AppText style={styles.error}>{cityError}</AppText>: <></>}

                {/* user input - content */}
                <AppTextInput
                    placeholder='Content'
                    containerStyle={{backgroundColor: AppColor.grey, width:'100%'}}
                    multiline
                    style={{fontSize: 16, height: 100, textAlignVertical: 'top', marginLeft: 10}}
                    value={content}
                    keyboardType='default'
                    onChangeText={(inputText) => setContent(inputText)}

                />

                {contentError.length>0 ? <AppText style={styles.error}>{contentError}</AppText>: <></>}

                {/* user input - image */}
                { 
                    selectedURI ? 
                    <Image source={{uri: selectedURI}} style={{width: 150, height: 150, marginLeft: 100, marginTop: 20,}}/> 
                    : 
                    <TouchableOpacity onPress={openImagePickerAsync}>
                        <View style={styles.icon}>
                            <AppIcon iconName="file-image-outline" size={60} colorStyle={{color: AppColor.blackblue}}/>
                            <AppText>Add photos from gallery</AppText>
                        </View>
                    </TouchableOpacity>
                }

                {imageError.length>0 ? <AppText style={styles.error}>{imageError}</AppText>: <></>}

                {/* submit button */}
                <View style={styles.submitButton}>
                    <AppButton title="Submit" color="blue" textC="lightergrey" onPress={() => {
                        if (doErrorCheck()) {
                            let commonData = DataManager.getInstance();
                            const payload = {
                                listingID: commonData.listings.length+1,
                                name,
                                city,
                                width: {
                                    width: 240,
                                },
                                rating: 0,
                                images: [
                                    {"uri": selectedURI}
                                ],
                                content,
                                category: categoryName,
                                coords: {
                                    lat, lon
                                },
                                reviews: []
                            }
                            console.log(payload)
                            commonData.addListing(payload);
                            navigation.navigate("Home")
                        }
                    }}
                    />
                </View>
            </ScrollView>
        </AppScreen>
    );
}

const styles = StyleSheet.create({
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        textAlign: 'center',
    },
    titleContainer: {
        marginTop: 10,
    },
    container: {
        marginTop: 50,
        margin: 20,
        marginRight: 0,
        marginBottom: 0,
        flex: 1
    },
    icon: {
        alignItems: 'center',
        marginTop: 20,
    },
    submitButton: {
        marginTop: 50,
        alignItems: 'center',
        marginRight: 10,
    },
    thumbnail: {
        width: 300,
        height: 300,
        resizeMode: "contain"
    },
    error: {
        margin: 5,
        color: AppColor.red,
        fontSize: 16, 
    }

})

export default AddListingScreen;