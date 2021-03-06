import React from 'react';
import { Image, StyleSheet, View, Text } from 'react-native'

import colors from '../config/colors'

function ViewImageScreen(props) {
    return (
        <View style={styles.container} >
            <View style={styles.closeIcon}></View>
            <View style={styles.deleteIcon}></View>
            {/* <Text>This is {props.route.parms.name}'s profile.</Text> */}
            <Image resizeMode="contain" style={styles.image} source={require('../assets/chair.jpg')} />
        </View>
    );
}

const styles = StyleSheet.create({
    closeIcon: {
        width: 50,
        height: 50,
        backgroundColor: colors.primary,
        position: 'absolute',
        top: 60,
        left: 30
    },
    container: {
        backgroundColor: colors.black,
        flex: 1
    },
    deleteIcon: {
        width: 50,
        height: 50,
        backgroundColor: colors.secondary,
        position: 'absolute',
        top: 60,
        right: 30
    },
    image: {
        width: '100%',
        height: '100%',
    }
})

export default ViewImageScreen;