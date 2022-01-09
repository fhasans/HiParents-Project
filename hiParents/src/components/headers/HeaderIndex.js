import React from 'react'
import { View, Text, StyleSheet,StatusBar } from 'react-native'

const HeaderIndex = (props) => {
    return (
        <View style={styles.headerTitle}>
            <StatusBar backgroundColor="transparent" translucent={true} />
            <Text style={styles.text}>{props.Htitle}</Text>
        </View>
    )
}

export default HeaderIndex

const styles = StyleSheet.create ({
    headerTitle: {
        
        height: '20%',
        width: '100%',
        justifyContent: 'center'
    },
    text: {
        color: 'white',
        marginTop: 40,
        marginLeft: 35,
        fontSize: 24,
        fontWeight: 'bold'
    }
})
