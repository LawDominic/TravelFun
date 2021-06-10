// library imports
import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import {useNavigation} from '@react-navigation/native';

// component imports
import AppColor from '../config/AppColor';
import AppIcon from '../components/AppIcon';
import AppMinimalCard from '../components/AppMinimalCard';
import AppScreen from '../components/AppScreen';
import AppText from '../components/AppText';
import DataManager from '../config/DataManager';

// get data function
const populateCategory = () => {
    let commonData = DataManager.getInstance();
    return commonData;
};

function ThingsToDoScreen({navigation}) {
    // load data into category variable
    const category = populateCategory().categories;
    return (
        <AppScreen>
            <View style={styles.main}>
                <AppText style={styles.header}>
                    Things to do
                </AppText>
                <View style={styles.container}>
                    {/* display categories available */}
                    <FlatList
                    data = {category}
                    keyExtractor = { category => category.categoriesID.toString()}
                    renderItem = {({item}) => 
                        <AppMinimalCard 
                            title={item.title}
                            IconComponent={
                                <AppIcon 
                                    iconName={item.iconName} 
                                    size={item.iconSize} 
                                    colorStyle={{color: AppColor[item.iconColor]}}/>
                            }
                            onPress={ () => navigation.navigate("Category", {
                                screen: "Category",
                                params: {
                                    paramCategoryID: item.categoriesID,
                                }
                                
                            })} 
                        />}
                    numColumns = {2}
                    />
                </View>
            </View>
        </AppScreen>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        top: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    header: {
        fontSize: 32,
        fontWeight: 'bold',
        marginTop: 30,
        marginLeft: 25,
    },
    main: {
        flex: 1,
    }
})

export default ThingsToDoScreen;