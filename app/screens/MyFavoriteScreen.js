// library imports
import React, {useState} from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

// component imports
import AppCard from '../components/AppCard';
import AppColor from '../config/AppColor';
import AppIcon from '../components/AppIcon';
import AppScreen from '../components/AppScreen';
import AppText from '../components/AppText';
import DataManager from '../config/DataManager';

// get data function
let populateData = () => {
    let commonData = DataManager.getInstance();
    return commonData;
};

// get necessary data from the function
const userID = populateData().getUserID();
let initialFavoritesList = populateData().favorites;
const listings = populateData().listings;

function MyFavoriteScreen({navigation, route}) {
    // useStates
    const [refreshing, setRefreshing] = useState(false)
    const [favorites, setFavorites] = useState(initialFavoritesList)
    const [favoritesRefresh, setFavoritesRefresh] = useState()

    // get listings
    const getList = () => {
    
        var arr = []
        console.log(favorites)
        for (let i=0;i<favorites.length;i++) {
            if (favorites[i].userID === userID) {
                arr.push(listings.find(x => x.listingID === favorites[i].listingID))
            }
        }
        console.log("asd" + userID)
        console.log(arr)
        return arr;
    }

    let arr = getList()

    // listing delete handling
    const handleDelete = (listing) => {
        const newFavoritesList = favorites.filter(item => item.userID !== listing.userID)
        setFavoritesRefresh(newFavoritesList)
    }

    return (
        <AppScreen>
           <View style={styles.titleContainer}>
                <AppText style={styles.title}>My Favourites</AppText>
            </View> 

            <View style={styles.container}>
                <TouchableOpacity onPress={ ()=> {console.log(initialFavoritesList); setFavorites(initialFavoritesList); }}>
                    <View style={styles.refreshBtn}>
                        <AppIcon iconName="refresh" size={22} colorStyle={{color: AppColor.blackblue}}/>
                    </View>
                </TouchableOpacity>
                {/* display favourite listings */}
                <FlatList
                    data = {arr}
                    keyExtractor = { arr => arr.listingID.toString()}
                    refreshing={refreshing}
                    onRefresh={() => {setFavorites(initialFavoritesList)}}
                    renderItem = {({item}) => {
                        return (
                            <AppCard title={item.name} 
                                    location={item.location} 
                                    imageSrc={item.images[0]} 
                                    widthStyle={{"width": 350, "height": 280}} 
                                    heightStyle={{"height": 190}}
                                    rating={item.rating}
                                    onSwipeLeft={() => (
                                        <TouchableOpacity onPress={() => {
                                            handleDelete(item)
                                        }}>
                                            <View style={styles.deleteView}>
                                                <AppIcon iconName="trash-can-outline" size={42} colorStyle={{color: AppColor.grey}}/>
                                            </View>
                                        </TouchableOpacity>
                                    )}
                                    onPress={ () => navigation.navigate("Listing", 
                                        {
                                            paramListingID: item.listingID,
                                        }
                                    )} 
                            />
                        )
                    }}
                />
            </View> 
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
        marginTop: 20,
        marginLeft: 20,
    },
    deleteView: {
        backgroundColor: AppColor.red,
        width: 100,
        marginTop: 15,
        height: 280,
        borderBottomLeftRadius: 25,
        borderTopLeftRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    refreshBtn: {
        marginLeft: 330,
    }
})
export default MyFavoriteScreen;