// library imports
import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Rating } from "react-native-rating-element";
import Swipeable from 'react-native-gesture-handler/Swipeable';

// component imports
import AppColor from '../config/AppColor';
import AppText from './AppText';

function AppCard({title, imageSrc, onPress, widthStyle, location, rating, heightStyle, onSwipeLeft}) {
    return (
        // swipeable component
        <Swipeable renderRightActions={onSwipeLeft}>
            <TouchableOpacity onPress={onPress} style={styles.box}>
                <View style={[styles.container, widthStyle]}>
                    {/* image component */}
                    <Image source={imageSrc} style={[styles.image, widthStyle, heightStyle]}/>
                    <View style={styles.textContainer}>
                        {/* rating component */}
                        <View style={styles.rating}>
                            <Rating
                                rated={rating}
                                totalCount={5}
                                ratingColor="#f1c644"
                                ratingBackgroundColor="#d4d4d4"
                                size={16}
                                readonly
                                icon="ios-star"
                                direction="row" 
                            />
                        </View>
                        {/* text component */}
                        <AppText style={styles.title}>{title}</AppText>
                        <AppText style={styles.location}>{location}</AppText>
                    </View>
                </View>
            </TouchableOpacity>
        </Swipeable>
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: AppColor.grey,
        height: 190,
        borderRadius: 25,
        marginTop: 15,
        marginBottom: 10,
        marginRight: 15,
    },

    title: {
        marginTop: 5,
        fontSize: 18,
        textAlign: 'left',
    },
    image: {
        height: 100,
        borderRadius: 25,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
    },
    textContainer: {
        marginLeft: 20,
    },
    location: {
    },
    rating: {
        marginTop: 5,
    }
})
export default AppCard;