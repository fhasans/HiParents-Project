import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/Entypo'
import * as Animatable from 'react-native-animatable';

const ChildActCard = (props) => {
    
    return (
                <Animatable.View animation={props.animation} duration={props.duration} style={styles.masterContainer}>
                    {/* BOX ON THE LEFT SIDE */}
                    <View style={styles.childContainer1}>
                        <View style={styles.childcontainer1_box1}>
                            <TouchableOpacity style={styles.touchableOne} onPress={props.OnPress}>   
                                <Text style={styles.text1}>
                                    {props.childname}
                                </Text>
                            </TouchableOpacity>   
                        </View>
                        <View style={styles.childContainer1_box2}>
                            <TouchableOpacity style={styles.touchableTwo}>
                                <Text style={styles.text2}>
                                  {props.nannyname}
                                </Text>
                            
                                {/* <Icon name='dot-single' size={25} color="black"/> */}
                                <Text style={styles.text2_2}>
                                    {props.activityname}
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    {/* BOX ON THE RIGHT SIDE */}
                    <View style={styles.childContainer2}>
                        <TouchableOpacity style={styles.touchableThree}>  
                            <Text style={styles.text3}>
                                  {props.time}
                            </Text>
                        </TouchableOpacity>
                    </View>
                    </Animatable.View>
    )
}

export default ChildActCard


const styles = StyleSheet.create ({
    masterContainer: {
        backgroundColor:'white',
        height: 90,
        flexDirection:
        'row',
        justifyContent:'center',
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
        elevation: 5
    },
    childContainer1: {
        backgroundColor:'white',
        height: '100%',
        width: '60%',
        flexDirection: 'column',
        justifyContent: "center"
    },
    childcontainer1_box1: {
        backgroundColor:'white',
        height: '40%',
        width:'100%',
        justifyContent: 'center'
    },
    childContainer1_box2: {
        backgroundColor:'white',
        // height: '60%',
        width: '100%',
        // alignItems: 'flex-start'
        // flexDirection: 'column'
    },
    childContainer2: {
        // backgroundColor:'yellow',
        height: '100%',
        width: '33%'
    },
    touchableOne: {
        height: '100%',
        width: '100%',
        justifyContent: 'flex-end'
    },
    touchableTwo: {
        // height: '100%',
        width: '96%',
        // justifyContent: 'space-between',
        flexDirection: 'column'},
    touchableThree: {
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    text1: {
        fontSize: 22,
        fontWeight: '600',
        color: 'black'
    },
    text2: {
        marginLeft: 3,
        fontSize: 16,
        fontWeight: '400',
        color: '#F67979',
        // marginVertical: '%'
        // marginHorizontal: '10%'
    },
    text2_2: {
        marginLeft: 3,
        fontSize: 16,
        fontWeight: '400',
        color: '#10B278',
        fontWeight: "bold"
    },
    text3: {
        fontSize: 16,
        fontWeight: '400',
        color: 'black'
    }
})