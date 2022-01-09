import React from 'react'
import { View, Text, Button, StyleSheet, StatusBar, Image, Pressable } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Idx = (props) => {
    return (
        <View style={styles.bg}>
            <StatusBar backgroundColor="transparent" translucent={true} />
            <View style={styles.logoCont}>
                <Image style={styles.logo} source={require('../../assets/image/Layer2.png')}/>
            </View>
            <View style={styles.formCont}>
                    <Text style={styles.titleTxt}>
                        Hi-Parents
                    </Text>
                    
                    <TouchableOpacity style={styles.btn} onPress={() => props.navigation.navigate('Login')}>
                        <Text style={styles.txt}>Sign In</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btn} onPress={() => props.navigation.navigate('Register')}>
                        <Text style={styles.txt}>Sign Up</Text>
                    </TouchableOpacity>
            </View>
        </View>
    )
}

export default Idx

const styles = StyleSheet.create ({
    bg: {
        justifyContent: 'flex-end',
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#10B278'
    },
    logoCont: {
        height: 111,
        width: 121
    },
    logo: {
            flex:1,
            height: null,
            width:null,
            resizeMode: 'cover',
            borderWidth: 1
    },
    formCont: {
        flexDirection: 'column',
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        width: '100%',
        height: '34%',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },
    btn: {
        backgroundColor: '#F67979',
        width: 335,
        height: 67,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        margin: 8
    },
    txt: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold'
    },
    titleTxt: {
        color: '#10B278',
        fontSize: 38,
        marginBottom: 20,
        fontWeight: 'bold'
    }
})
