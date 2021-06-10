// library imports
import React, { useState } from 'react';
import { View, StyleSheet, Modal, FlatList, TouchableOpacity, TouchableWithoutFeedback} from 'react-native';

// component imports
import AppColor from '../config/AppColor';
import AppIcon from './AppIcon';
import AppListItem from './AppListItem';
import AppRadioButton from './AppRadioButton';
import AppScreen from './AppScreen';
import AppText from './AppText';

// datamanager import
import DataManager from '../config/DataManager';

function AppPicker({option, data, icon, placeholder, selectedItem, onSelectItem, ...otherProps}) {

    // useStates
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState()

    // picker filter, if the option is "category", it'll use the category picker instead of the default picker
    if (option === "category") {
        const getCategories = () => {
            let commonData = DataManager.getInstance();
            return commonData.categories
        }

        // fetch the list of categories
        const category = getCategories();

        let categoryTitle;

        return (
            <>
                {/* placeholder picker while modal is closed */}
                <TouchableWithoutFeedback onPress = {() => setModalVisible(true)}>
                    <View style={styles.categoryPlaceholder}>
                        {/* display the selected category if available, else use the placeholder */}
                        <AppText style={[styles.text, {marginLeft: 5}]}>
                            {selectedCategory? selectedCategory : placeholder}
                        </AppText>
                        {/* icon componenet for picker */}
                        <View style={styles.icon}>
                            <AppIcon iconName="chevron-down" size={18} colorStyle={{color: AppColor.blue}}/>
                        </View>
                    </View>
                </TouchableWithoutFeedback>

                {/* modal is visible component */}
                <Modal visible={modalVisible} animationType="fade" transparent>
                    <AppScreen>
                        <View style={styles.container}>
                            <View style={[styles.modalView, {height: 270, marginTop: 200}]}>
                                <View style={{margin: 20, marginLeft: -130}}>
                                    {/* flatlist for displaying categories */}
                                    <FlatList
                                        data = {category}
                                        keyExtractor = { category => category.categoriesID.toString()}
                                        renderItem = {({item}) => {
                                            return (
                                                <View style={styles.categoryContainer}>
                                                    <AppListItem title={item.title} titleStyle="subtitle" 
                                                    onPress={() => {categoryTitle = item.title}}
                                                    IconComponent={
                                                        <AppIcon iconName={item.iconName} size={24} colorStyle={{color: AppColor[item.iconColor]}}/>
                                                    }/>
                                                </View>
                                            )
                                        }}  
                                    />
                                </View>
                                <View style={[styles.buttons, {marginTop: -100}]}>
                                    {/* close button */}
                                    <TouchableOpacity onPress = {() => setModalVisible(false)}>
                                        <View style={styles.closeButton}>
                                            <AppText style={styles.closeButtonText}>Close</AppText>
                                        </View>
                                    </TouchableOpacity>
                                    {/* confir mbutton */}
                                    <TouchableOpacity onPress = {() => {
                                        setSelectedCategory(categoryTitle)
                                        onSelectItem(categoryTitle)
                                        setModalVisible(false)
                                    }}>
                                        <View style={styles.confirmButton}>
                                            <AppText style={styles.closeButtonText}>Confirm</AppText>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>    
                    </AppScreen>
                </Modal>
            </>
        );
    }

    // useStates
    const [locationValue, setLocationValue] = useState(0);

        const getRadioProps = () => {
            let commonData = DataManager.getInstance();
            return commonData[data]
        };

        // fetch the list of radio_props
        const radio_props = getRadioProps()

        return (
            <>
                {/* placeholder picker while modal is closed */}
                <TouchableWithoutFeedback onPress = {() => setModalVisible(true)}>
                    <View style={styles.placeholder}>
                        {/* display placeholder */}
                        <AppText style={styles.text}> { placeholder } </AppText>
                        {/* icon component for picker */}
                        <View style={styles.icon}>
                            <AppIcon iconName="chevron-down" size={18} colorStyle={{color: AppColor.blue}}/>
                        </View>
                    </View>
                </TouchableWithoutFeedback>

                {/* modal is a visible component */}
                <Modal visible={modalVisible} animationType="fade" transparent>
                    <AppScreen>
                        <View style={styles.container}>
                            <View style={styles.modalView}>
                                <View style={{marginTop: 30}}>
                                    {/* display radio button with data in PROP={}*/}
                                    <AppRadioButton PROP={radio_props} />
                                </View>
    
                                <View style={[styles.buttons, {marginTop: 10}]}>
                                    {/* close button */}
                                    <TouchableOpacity onPress = {() => setModalVisible(false)}>
                                        <View style={styles.closeButton}>
                                            <AppText style={styles.closeButtonText}>Close</AppText>
                                        </View>
                                    </TouchableOpacity>
                                    {/* confirm button */}
                                    <TouchableOpacity>
                                        <View style={styles.confirmButton}>
                                            <AppText style={styles.closeButtonText}>Confirm</AppText>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>    
                    </AppScreen>
                </Modal>
            </>
        );
}

const styles = StyleSheet.create({
    placeholder:{
        flexDirection: 'row',
        backgroundColor: 'rgba(249,249,249,0.5)',
        borderColor: AppColor.lightgrey,
        borderRadius: 25, 
        borderWidth: 2,
        padding: 10,
        marginVertical: 5,
        width:175,
        alignItems: 'center',
    },
    categoryPlaceholder:{
        flexDirection: 'row',
        backgroundColor: AppColor.grey,
        borderRadius: 10, 
        padding: 10,
        marginVertical: 5,
        width:'100%',
        alignItems: 'center',
    },
    icon: {
        marginRight: 10,
    },
    text:{
        fontSize:16,
        fontFamily:'Roboto',
        color: AppColor.blackblue,
        marginLeft: 10,
        flex:1,
    },
    confirmButton: {
        backgroundColor: AppColor.blue,
        borderBottomRightRadius: 15,
        width: 125,
        padding: 5,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    closeButton: {
        backgroundColor: AppColor.blue,
        borderBottomLeftRadius: 15,
        width: 125,
        padding: 5,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    modalView: {
        height: 200,
        width: 250,
        marginLeft: 70,
        marginTop: 300,
        backgroundColor: 'rgba(249,249,249,0.9)',
        borderRadius: 15,
        alignItems: "center",
        elevation: 5
    },
    container: {
        flex: 1,
        marginTop: -20,
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    buttons: {
        flexDirection: 'row',
        top: 40,
    },
    categoryContainer: {
        marginLeft: 130,
    }
})
export default AppPicker;