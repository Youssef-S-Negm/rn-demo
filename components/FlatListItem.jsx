import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FlatListItem = ({ item }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.itemText}>{item}</Text>
        </View>
    )
}

export default FlatListItem

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'cyan',
        margin: 8,
        padding: 8,
        borderRadius: 16
    },
    itemText: {
        fontSize: 20
    }
})