import React from 'react';

import { StyleSheet, View } from 'react-native';

import AppColor from '../config/AppColor';
import AppIcon from '../components/AppIcon';
import AppMinimalCard from '../components/AppMinimalCard';
import AppScreen from '../components/AppScreen';

function ThingsToDoScreen(props) {
    return (
        <AppScreen style={styles.screenContainer}>
            <View style={styles.container}>
                <View style={styles.firstCard}>
                    <AppMinimalCard title="Nature & Parks"
                        IconComponent={
                        <AppIcon iconName="nature-people" size={42} colorStyle={{color: AppColor.green}}/>
                        }
                    />
                </View>
                <View style={styles.secondCard}>
                    <AppMinimalCard title="Beaches"
                        IconComponent={
                        <AppIcon iconName="beach" size={42} colorStyle={{color: AppColor.yellow}}/>
                        }
                    />
                </View>
                <View style={styles.thirdCard}>
                    <AppMinimalCard title="Museums & Art Galleries"
                        IconComponent={
                        <AppIcon iconName="bank" size={42} colorStyle={{color: AppColor.orange}}/>
                        }
                    />
                </View>
                <View style={styles.fourthCard}>
                    <AppMinimalCard title="Theme Parks & Attractions"
                        IconComponent={
                        <AppIcon iconName="ticket" size={42} colorStyle={{color: AppColor.red}}/>
                        }
                    />
                </View>
            </View>
        </AppScreen>
    );
}

const styles = StyleSheet.create({
    container: {
        top: 200,
    },
    firstCard: {
        marginLeft: 25,
    },
    secondCard: {
        top: -160,
        left: 205,
    },
    thirdCard: {
        left: 25,
        top: -140,
    },
    fourthCard: {
        left: 205,
        top: -300,
    }
})

export default ThingsToDoScreen;