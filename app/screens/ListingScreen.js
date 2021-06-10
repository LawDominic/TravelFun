// library imports
import React, {useState} from 'react';
import { Dimensions, Image, ScrollView, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import { Rating } from "react-native-rating-element";
import MapView, { Marker } from 'react-native-maps';

// component imports
import AppColor from '../config/AppColor';
import AppIcon from '../components/AppIcon';
import AppScreen from '../components/AppScreen';
import AppText from '../components/AppText';
import DataManager from '../config/DataManager';

// grab listing using listingID passed from HomeScreen or CategoryScreen
const getListing = (listingID) => {
    let commonData = DataManager.getInstance();
    return (commonData.listings.find(listing => listing.listingID === listingID));
}

// calculate deltas for displaying location on map
function regionFrom(lat, lon, distance) {
    distance = distance/2
    const circumference = 40075
    const oneDegreeOfLatitudeInMeters = 111.32 * 1000
    const angularDistance = distance/circumference

    const latitudeDelta = distance / oneDegreeOfLatitudeInMeters
    const longitudeDelta = Math.abs(Math.atan2(
            Math.sin(angularDistance)*Math.cos(lat),
            Math.cos(angularDistance) - Math.sin(lat) * Math.sin(lat)))

    return {
        latitude: lat,
        longitude: lon,
        latitudeDelta,
        longitudeDelta,
    }
}


function ListingScreen({route}) {

    const listing = getListing(route.params.paramListingID);
    const reviews = listing.reviews;
    const lat = listing.coords.lat;
    const lon = listing.coords.lon;


    function renderReviews() {
        return reviews.map((item) => <AppText key={item} style={{marginLeft: 15, fontStyle: 'italic'}}>"{item}"</AppText>);
    }

    const latDelta = (regionFrom(lat, lon, 1000).latitudeDelta)
    const lonDelta = (regionFrom(lat, lon, 1000).longitudeDelta)

    const [favoriteIcon, setFavoriteIcon] = useState(false)

    return (
        <AppScreen>
            <ScrollView style={{flexGrow: 1}}>
                <View style={styles.swipeContainer}>
                    {/* display multiple photos for listing */}
                    <SwiperFlatList
                        autoplay
                        autoplayDelay={4}
                        autoplayLoop
                        index={0}
                        showPagination
                        data={listing.images}
                        renderItem={({ item }) => (
                            <View style={styles.imgContainer}>
                                <Image source={item} style={styles.image}/>
                            </View>
                        )}
                    />
                </View>

                <View style={styles.textContainer}>
                    <View style={styles.header}>
                        <AppText style={styles.title}>{listing.name}</AppText> 
                        
                        {/* faovourite component */}
                        <TouchableWithoutFeedback onPress={() => {
                            setFavoriteIcon(!favoriteIcon);
                            let commonData = DataManager.getInstance();
                            const userID = commonData.getUserID()
                            const listingID = listing.listingID;
                            const payload = {
                                listingID,
                                userID,
                            }
                            if (!favoriteIcon) {
                                console.log("Added" + payload.listingID )
                                commonData.addFavorites(payload);
                            } else {
                                console.log("Removed")
                                commonData.removeFavorites(payload);
                            }
                        }}>

                            <View style={styles.favourite}>
                                    <AppIcon size={30} iconName={favoriteIcon ? "heart-off-outline" : "heart-outline"} colorStyle={{color: AppColor.azure}}/>
                            </View>
                        </TouchableWithoutFeedback> 
                    </View>

                    {/* ratings component */}
                    <View style={styles.rating}>
                        <Rating rated={listing.rating} totalCount={5} ratingColor="#f1c644" ratingBackgroundColor="#d4d4d4" size={16} readonly icon="ios-star" direction="row" />
                    </View>

                    {/* content component */}
                    <View style={styles.whatToExpect}>
                        <AppText style={styles.title}>What to expect</AppText>
                        <View style={styles.whatToExpectBody}>
                            <AppText>
                                {listing.content}
                            </AppText>
                        </View>
                    </View>

                    {/* reviews component */}
                    <View style={styles.reviews}>
                        <AppText style={styles.title}>Reviews</AppText>
                           {renderReviews()}
                    </View>

                    {/* location component */}
                    <View style={styles.locationContainer}>
                        <AppText style={styles.title}>Location</AppText>
                        {/* google maps */}
                        <MapView
                            style={styles.maps}
                            initialRegion={{
                            latitude: lat,
                            longitude: lon,
                            latitudeDelta: latDelta,
                            longitudeDelta: lonDelta,
                        }}>
                            {/* marker on the map to display location */}
                            <Marker
                                coordinate={{ latitude : lat , longitude : lon }}
                            />
                        </MapView>
                    </View>
                </View>
            </ScrollView>
        </AppScreen>
    );
}

const styles = StyleSheet.create({
    image: {
        height: 200,
        width: 400,
    },
    title: {
        color: AppColor.blackblue,
        fontSize: 24,
        fontWeight: 'bold',
        margin: 15,
    },
    favourite: {
        alignItems: 'flex-end',
        marginTop: -46,
        marginRight: 20,
    },
    rating: {
        marginLeft: 15,
        marginTop: 10,
    },
    ratingText: {
        marginLeft: 120,
        marginTop: -18,
    },
    whatToExpect: {
        marginTop: 15,
    },
    whatToExpectBody: {
        margin: 15,
        marginTop: -10,
    },
    maps: {
        flex: 1,
        width: Dimensions.get('window').width,
        height: 200,
    },
})

export default ListingScreen;