// library imports
import React, {useState} from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

// component imports
import AppCard from '../components/AppCard';
import AppScreen from '../components/AppScreen';
import AppText from '../components/AppText';
import DataManager from '../config/DataManager';

// get listings in category function
const getCategory = (categoryID) => {
    let commonData = DataManager.getInstance();
    return (commonData.categories.find(category => category.categoriesID === categoryID));
}

// get data function
const populateListings = () => {
    let commonData = DataManager.getInstance();
    return commonData;
};

function CategoryScreen({navigation, route}) {
    const [refreshing, setRefreshing] = useState(false)

    // pass categoryID from ThingsToDoScreen 
    const category = getCategory(route.params.paramCategoryID);
    // get categoryName
    const categoryName = category.categoryName;
    // get listings
    let listings = populateListings().listings;
    return (
        <AppScreen>
            <View style={styles.titleContainer}>
                <AppText style={styles.title}>{category.title}</AppText>
            </View>

            <View style={styles.container}>
                {/* populate screen with listings belonging to category */}
                <FlatList
                    data = {listings}
                    keyExtractor = { listings => listings.listingID.toString()}
                    refreshing={refreshing}
                    onRefresh={() => {listings = populateListings().listings}}
                    renderItem = {({item}) => {
                        if ((item.category).includes(categoryName)) {
                            return (
                                <AppCard title={item.name} 
                                        location={item.location} 
                                        imageSrc={item.images[0]} 
                                        widthStyle={{"width": 350, "height": 280}} 
                                        heightStyle={{"height": 190}}
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
        alignItems: 'center',
        marginTop: 20,
        marginLeft: 15,
    }
})

export default CategoryScreen;