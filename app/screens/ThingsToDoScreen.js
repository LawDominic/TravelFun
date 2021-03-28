import React from 'react';

import { FlatList, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import {useNavigation} from '@react-navigation/native';

import AppColor from '../config/AppColor';
import AppIcon from '../components/AppIcon';
import AppMinimalCard from '../components/AppMinimalCard';
import AppScreen from '../components/AppScreen';
import AppText from '../components/AppText';

const cards = [
    {
        id: 1,
        title: "Natue & Parks",
        iconName: "nature-people",
        iconSize: 42,
        iconColor: "green",
        screen: {screen: "Nature"},
    },
    {
        id: 2,
        title: "Beaches",
        iconName: "beach",
        iconSize: 42,
        iconColor: "yellow",
        screen: {screen: "Beach"},
    },
    {
        id: 3,
        title: "Museums & Art Galleries",
        iconName: "bank",
        iconSize: 42,
        iconColor: "orange",
        screen: {screen: "Museum"},
    },
    {
        id: 4,
        title: "Theme Parks & Attractions",
        iconName: "ticket",
        iconSize: 42,
        iconColor: "red",
        screen: {screen: "ThemePark"},
    },
]

function ThingsToDoScreen({navigation}) {
    return (
        <AppScreen>
            <View style={styles.main}>
                {/* <ScrollView contentContainerStyle={styles.scroll}> */}
                    <AppText style={styles.header}>
                        Things to do
                    </AppText>
                    <View style={styles.container}>
                        <FlatList
                        data = {cards}
                        keyExtractor = { author => author.id.toString()}
                        renderItem = {({item}) => 
                            <AppMinimalCard 
                                title={item.title}
                                IconComponent={
                                    <AppIcon 
                                        iconName={item.iconName} 
                                        size={item.iconSize} 
                                        colorStyle={{color: AppColor[item.iconColor]}}/>
                            }
                            onPress={ () => navigation.navigate(item.screen.screen)}
                            />}
                        numColumns = {2}
                        />
                    </View>
                {/* </ScrollView> */}
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
    scroll: {
        flexGrow: 1,
    },
    main: {
        flex: 1,
    }
})

export default ThingsToDoScreen;