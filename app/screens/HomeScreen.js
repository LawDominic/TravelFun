import React, {useState} from 'react';
import { FlatList, Image, StyleSheet, ScrollView, View, _View } from 'react-native';
import {useNavigation} from '@react-navigation/native';

import AppCard from '../components/AppCard';
import AppPicker from '../components/AppPicker';
import AppScreen from '../components/AppScreen';
import AppText from '../components/AppText';
import DataManager from '../config/DataManager';

// get data function
const populateListings = () => {
    let commonData = DataManager.getInstance();
    return commonData;
};

function HomeScreen({navigation}) {

    // useStates
    const listings = populateListings().listings;
    const [location, setLocation] = useState("Sydney")

    return (
        <AppScreen>
            <ScrollView>
                {/* background image */}
                <Image source={require('../assets/location-bg.jpeg')} style={styles.image}/>
                {/* modal picker */}
                <View style={styles.dropdown}>
                   <AppPicker data="location" placeholder={location}/>
                </View>
                <View style={styles.container}>
                    <View style={styles.first}>
                        <AppText style={styles.title}>Nearby</AppText>
                            {/* listings nearby city */}
                            <FlatList
                                data = {listings}
                                keyExtractor = { listings => listings.listingID.toString()}
                                horizontal = {true}
                                renderItem = {({item}) => {
                                    // if ((item.category).includes("nearby_sydney")) {
                                        return (
                                            <AppCard title={item.name} 
                                                    location={item.location} 
                                                    imageSrc={item.images[0]} 
                                                    widthStyle={item.width} 
                                                    rating={item.rating}
                                                    onPress={ () => navigation.navigate("Listing", 
                                                        {
                                                            paramListingID: item.listingID,
                                                        }
                                                    )} 
                                            />
                                        )
                                    // }
                                } } 
                            />
                    </View>
                    <View style={styles.second}>
                        <AppText style={styles.title}>Top things to do</AppText>
                            {/* top listings */}
                            <FlatList
                                data = {listings}
                                keyExtractor = { listings => listings.listingID.toString()}
                                horizontal = {true}
                                renderItem = {({item}) => {
                                    if ((item.category).includes("top_sydney")) {
                                        return (
                                            <AppCard title={item.name} 
                                                    location={item.location} 
                                                    imageSrc={item.images[0]} 
                                                    widthStyle={item.width} 
                                                    rating={item.rating}
                                                    onPress={ () => navigation.navigate("Listing", 
                                                        {
                                                            paramListingID: item.listingID,
                                                        }
                                                    )} 
                                            />
                                        )
                                    }
                                } } 
                            />
                    </View>
                </View>
            </ScrollView>
        </AppScreen>
    );
}

const styles = StyleSheet.create({
    image: {
        height: 250,
        opacity: 0.25,
    },
    dropdown: {
        top: -150,
        alignItems: 'center',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
    },
    container: {
        marginTop: -10,
        marginLeft: 20,
    },
    first: {

    },
    second: {
        marginTop: 20,
    }
})

export default HomeScreen;