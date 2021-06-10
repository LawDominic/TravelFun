// library imports
import React, {useState} from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

// component imports
import AppColor from '../config/AppColor';
import AppText from './AppText';

function AppRadioButton({PROP}) {

    // useStates
    const [selectedValue, setValue] = useState("");

    return (
        <View>
            {/* array mapping */}
            {PROP.map(res => {
                return (
                    <View key={res.key} style={styles.container}>
                        <AppText style={styles.radioText}> {res.label} </AppText>
                        {/* onPress, set selected value */}
                        <TouchableOpacity
                            style={styles.radioCircle}
                            onPress={() => {
                                setValue(res.key)
                            }}>
                            {selectedValue === res.key && <View style={styles.selectedRb}/>}
                        </TouchableOpacity>
                    </View>
                )
            })}
        </View>

    );
}

const styles = StyleSheet.create({
	container: {
        marginBottom: 10,
        alignItems: 'center',
        flexDirection: 'row',
		justifyContent: 'space-between',
	},
    radioText: {
        marginRight: 35,
        color: '#000',
    },
	radioCircle: {
		height: 20,
		width: 20,
		borderRadius: 100,
		borderWidth: 2,
		borderColor: AppColor.azure,
		alignItems: 'center',
		justifyContent: 'center',
	},
	selectedRb: {
		width: 10,
		height: 10,
		borderRadius: 50,
		backgroundColor: AppColor.azure,
    },
});

export default AppRadioButton;